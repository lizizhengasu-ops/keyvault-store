# Deploy-Kit 修正方案（v2）

> 行业参考: Deployer.org (11k+ stars) · Roots Trellis/Bedrock (6.5k+ stars) · GitHub Actions · WP-CLI
> 研究日期: 2026-07-07

---

## 一、原方案的问题

对照行业标准（Deployer、Trellis/Bedrock、Ansible），原方案有以下缺失：

| # | 缺失项 | 为什么重要 | 行业怎么做的 |
|---|--------|-----------|------------|
| 1 | **无回滚机制** | 部署失败要能秒回上个版本 | Deployer 用 releases/ + current 符号链接 |
| 2 | **无零停机部署** | 用户不能看到 502 | 新版本放在 separate dir → 切换 symlink |
| 3 | **无多环境支持** | 要先测试再上线 | Trellis 区分 production/staging/development |
| 4 | **无 CI/CD 集成** | 不能 Git push 自动部署 | GitHub Actions + SSH |
| 5 | **无健康检查** | 部署完要验证真的能跑 | Deployer 自带的 health check task |
| 6 | **无部署通知** | 失败了谁通知你 | Slack/钉钉/邮件 webhook |
| 7 | **环境隔离不够** | 每个站应该用独立系统用户 | 每个站独立 Linux user + PHP-FPM pool |
| 8 | **首次部署 vs 更新部署混在一起** | 首次要装环境，后续只更新代码 | 拆分成 provision + deploy 两个命令 |

## 二、修正后的架构

```
deploy-kit/
│
├── deploy                    # 主命令
│   ├── deploy provision      # 首次部署：初始化服务器 + 装环境
│   ├── deploy release        # 增量部署：更新代码 + 切换 symlink
│   └── deploy rollback       # 回滚到上一个版本
│
├── provision/                 # 服务器初始化（跑一次）
│   ├── 00-check.sh           # 系统检查 (OS/Arch/Ports)
│   ├── 01-install-lamp.sh    # 安装 nginx + PHP 8.x + MySQL
│   ├── 02-create-user.sh     # 创建站点独立用户 + 目录
│   ├── 03-nginx.sh           # Nginx 站点配置 + Certbot SSL
│   └── 04-configure-wp.sh    # WP-CLI 安装 WordPress + 配置
│
├── release/                   # 每次部署代码时跑
│   ├── 01-build.sh           # 本地构建 (npm run build)
│   ├── 02-upload.sh          # rsync 上传到服务器 releases/{version}/
│   ├── 03-db-migrate.sh      # 数据库变更（如果有）
│   ├── 04-switch-symlink.sh  # 切换 current -> 新版本
│   ├── 05-health-check.sh    # 验证 HTTP 200 + API 可用
│   └── 06-notify.sh          # 通知完成/失败
│
├── config/
│   ├── provision.yml         # 首次部署配置
│   └── sites/                # 每个站的部署配置
│       ├── keystarter.yml
│       └── example.yml
│
├── scripts/
│   ├── common.sh             # 公共函数 (日志/错误处理/SSH)
│   ├── rollback.sh           # 回滚逻辑
│   └── verify.sh             # 部署后验证
│
└── README.md
```

## 三、部署目录结构（服务器上）

```
/var/www/store.keystarter.com/
├── releases/                  # 所有历史版本
│   ├── 20260707-090000/       # v1.0.0
│   │   ├── dist/              # 前端构建
│   │   └── wp-content/        # WordPress 主题/插件
│   ├── 20260708-120000/       # v1.1.0
│   │   ├── dist/
│   │   └── wp-content/
│   └── 20260709-150000/       # v1.2.0 (当前)
├── current -> releases/20260709-150000/  # 符号链接指向当前版本
├── shared/                    # 多版本共享的文件
│   ├── wp-config.php          # 数据库配置
│   └── uploads/               # 用户上传
└── .env                       # 环境变量
```

## 四、零停机部署流程

```
1. rsync 新版本 → releases/20260709-150000/
2. 安装依赖 (npm install)
3. 运行数据库变更
4. ln -sfn releases/20260709-150000 current  ← 原子操作，毫秒切换
5. 健康检查 (curl 新版本)
6. 清理旧版本 (保留最近 3 个)
```

## 五、每个模块的详细制作方案

### provision/00-check.sh

| 项目 | 说明 |
|------|------|
| 检查项 | Ubuntu 22.04+, root/wheel 组, 磁盘空间 >10GB, 内存 >1GB, 端口 80/443 可用 |
| 输出 | PASS/FAIL 报告 |
| 失败处理 | 列出具体不满足的条件，不继续执行 |

### provision/01-install-lamp.sh

| 组件 | 安装方式 | 配置要点 |
|------|---------|---------|
| nginx 1.24+ | apt install | 站点模板、worker 调优 |
| PHP 8.2+ | apt + ondrej/php PPA | opcache、max_execution_time、upload_max_filesize |
| MySQL 8.0+ | apt install | 创建站点专属数据库 + 用户 |
| Redis | apt install | 对象缓存，不需要认证 |

### provision/02-create-user.sh

| 项目 | 说明 |
|------|------|
| Linux 用户 | 每个站单独用户 (无登录 shell) |
| 目录 | /var/www/{domain}/ → releases/ + shared/ + current |
| SSH 密钥 | 配置部署用的 SSH 公钥 |
| 权限 | 用户目录 750, nginx 可读 |

### provision/03-nginx.sh

| 项目 | 说明 |
|------|------|
| 站点配置 | server_name, root → current/dist, PHP-FPM socket |
| SSL | Certbot + Let's Encrypt, 自动续期 cron |
| HTTPS | HTTP → 301 跳转 HTTPS |
| 安全头 | HSTS, X-Frame-Options, X-Content-Type-Options |
| PHP-FPM | 站点独立的 pool (user/group/socket) |

### provision/04-configure-wp.sh

| 项目 | 说明 |
|------|------|
| WP-CLI | 下载 wp-cli.phar |
| WordPress 安装 | wp core download + wp core config + wp core install |
| WooCommerce | 安装 + 激活 WooCommerce 插件 |
| 基础设置 | 货币 USD、国家 US、税关、固定链接 /%postname%/ |
| 管理员账户 | 自动创建 + 输出到部署报告 |

### release/01-build.sh

| 项目 | 说明 |
|------|------|
| 本地执行 | npm run build |
| 产物 | dist/ 目录 (用于前端) |
| 版本号 | 时间戳 + Git commit SHA |

### release/02-upload.sh

| 项目 | 说明 |
|------|------|
| 传输方式 | rsync over SSH (增量) |
| 上传目录 | /var/www/{domain}/releases/{version}/ |
| 排除项 | node_modules, .git, .env |
| 验证 | 校验文件数 + 总大小 |

### release/03-db-migrate.sh

| 项目 | 说明 |
|------|------|
| 工具 | WP-CLI (wp db) 或自定义 SQL |
| 场景 | WooCommerce 设置更新、自定义表变更 |
| 回滚 | 迁移前自动备份数据库 |
| 安全 | 只读检查 → 执行 → 验证 |

### release/04-switch-symlink.sh

| 项目 | 说明 |
|------|------|
| 命令 | ln -sfn /releases/{version} /current |
| 原子性 | 符号链接替换是原子操作，毫秒级完成 |
| 旧版保留 | 保留最近 3 个版本供回滚 |

### release/05-health-check.sh

| 项目 | 说明 |
|------|------|
| HTTP 200 | curl 首页 → 200 |
| SSL 有效 | curl -v 检查证书有效期 |
| API 可用 | WooCommerce REST API /wc/v3/ 返回 200 |
| 页面大小 | 首页 HTML 大于 1KB（排除空白页） |

### release/06-notify.sh

| 项目 | 说明 |
|------|------|
| 输出 | 部署报告 (成功/失败 + 耗时 + 版本) |
| 邮件 | 失败时发送告警邮件 |
| 日志 | /var/log/deploy.log |

### 回滚 (rollback.sh)

| 项目 | 说明 |
|------|------|
| 命令 | deploy-kit rollback {domain} |
| 逻辑 | 找到上一个版本 → 切换 symlink → 健康检查 |
| 数据库 | 如有迁移则回退数据库快照 |

## 六、配置示例 (config/example.yml)

```yaml
domain: store.keystarter.com
server:
  host: 203.0.113.10
  user: root
  ssh_key: ~/.ssh/id_rsa

wordpress:
  admin_user: admin
  admin_email: admin@keystarter.com
  site_title: KeyStarter
  locale: en_US

woocommerce:
  currency: USD
  country: US
  payment_stripe_key: sk_live_xxx
  payment_stripe_publishable: pk_live_xxx

email:
  smtp_host: smtp.sendgrid.net
  smtp_user: apikey
  smtp_pass: SG.xxxxx

products:
  source: ../data/products.json

frontend:
  build_from: ../keystarter

notify:
  email: ops@keystarter.com
```

## 七、命令用法

```bash
# 首次部署（新服务器 + 新站）
deploy-kit provision config/sites/keystarter.yml
  → 安装服务器环境
  → 装 WordPress + WooCommerce
  → 配置 SSL
  → 导入产品和数据
  → 输出上线报告

# 日常更新（改代码后重新部署）
deploy-kit release config/sites/keystarter.yml
  → 本地构建
  → rsync 到服务器
  → 切换 symlink
  → 健康检查
  → 通知

# 紧急回滚
deploy-kit rollback store.keystarter.com
  → 切换回上个版本
  → 恢复数据库快照
  → 验证
