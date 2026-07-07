# Ops-Kit 方案设计

> 状态: 方案 · 待执行
> 日期: 2026-07-07
> 定位: 独立站持续运维工具箱

---

## 一、设计目标

1. 每个独立站部署一个 ops-kit 实例，持续运行
2. 覆盖备份、安全、监控、更新四个核心运维域
3. 每个站点独立，互不干扰
4. 支持批量做站场景：新站上线后只需部署一个 ops-kit 实例

## 二、架构

```
┌──────────────────────────────────────────┐
│         每台服务器的 ops-kit              │
│                                          │
│  cron 定时任务                            │
│  ├── backup.sh (每天 03:00)               │
│  │   ├── mysqldump → tar.gz               │
│  │   ├── wp-content/ → tar.gz             │
│  │   └── 上传到备份存储                    │
│  │                                         │
│  ├── monitor.sh (每 5 分钟)               │
│  │   ├── curl 检测 200                    │
│  │   ├── SSL 到期检查                     │
│  │   └── 失败 → webhook 告警              │
│  │                                         │
│  ├── security-scan.sh (每天 06:00)         │
│  │   ├── 文件权限检查                     │
│  │   ├── 可疑文件扫描                     │
│  │   └── 登录尝试分析                     │
│  │                                         │
│  └── update.sh (每周日 04:00)             │
│      ├── wp core update                   │
│      ├── wp plugin update --all           │
│      └── wp theme update --all            │
│                                          │
│  告警 → Webhook / 邮件                    │
│  backup → 本地磁盘 / S3                   │
└──────────────────────────────────────────┘
```

## 三、功能模块详解

### 3.1 backup (P0 — 必须)

| 项目 | 内容 |
|------|------|
| 备份范围 | WordPress 数据库 + wp-content/uploads + 主题 + 插件 |
| 频率 | 每天 03:00 |
| 保留策略 | 最近 7 天每日 + 最近 4 周每周 + 每月 |
| 存储位置 | 本地 + S3 兼容对象存储 |
| 恢复方式 | 脚本一键恢复 |
| 告警 | 备份失败 → 邮件通知 |

### 3.2 monitor (P0 — 必须)

| 项目 | 内容 |
|------|------|
| 站点存活 | 每 5 分钟 curl，非 200 → 告警 |
| SSL 证书 | 每天检查到期日，< 14 天 → 告警 |
| 磁盘空间 | 每天检查，< 20% → 告警 |
| PHP 错误 | 每小时检查 error log |
| MySQL 状态 | 每天检查连接状态 |

### 3.3 security (P1 — 重要)

| 项目 | 内容 |
|------|------|
| 文件权限 | 修复目录权限 (755/644) |
| 可疑文件 | 扫描 wp-content 中新增的可疑文件 |
| 登录保护 | 检查 wp-login 爆破尝试 |
| 核心校验 | wp core verify-checksums |
| 插件审计 | 列出所有插件及版本 |

### 3.4 update (P1 — 重要)

| 项目 | 内容 |
|------|------|
| WordPress 核心 | wp core update |
| 插件 | wp plugin update --all |
| 主题 | wp theme update --all |
| 预检查 | 更新前自动备份数据库 |
| 失败回滚 | 更新失败自动恢复备份 |

### 3.5 可观测性

所有模块的运行结果统一输出到:

```
/var/log/ops-kit/
├── backup.log        # 备份记录
├── monitor.log       # 监控记录
├── security.log      # 安全扫描记录
├── update.log        # 更新记录
└── status.json       # 当前状态（供 dashboard 读取）
```

## 四、告警机制

| 告警级别 | 触发条件 | 通知方式 |
|---------|---------|---------|
| CRITICAL | 站点下线 / 备份失败 | 邮件 + SMS |
| WARNING | SSL < 14天 / 磁盘 < 20% | 邮件 |
| INFO | 更新完成 / 安全扫描完成 | 不通知，日志记录 |

告警通道复用 marketing-kit 的 Resend/SendGrid 配置。

## 五、文件结构

```
ops-kit/
├── scripts/
│   ├── backup.sh          # 备份脚本
│   ├── backup-restore.sh  # 恢复脚本
│   ├── monitor.sh         # 监控脚本
│   ├── security-scan.sh   # 安全扫描
│   └── update.sh          # 更新脚本
├── config/
│   └── ops.env.example    # 配置模板
├── dashboard/
│   ├── index.html         # 状态页面 (可选)
│   └── status.json        # 当前状态
├── install.sh             # 一键安装到服务器
└── README.md
```

## 六、使用方式

```bash
# 在服务器上安装
curl -fsSL https://keystarter.com/ops-kit/install.sh | bash

# 配置
cp config/ops.env.example config/ops.env
# 编辑 ops.env: 填入域名、备份存储路径、告警邮箱

# 手动运行测试
bash scripts/backup.sh
bash scripts/monitor.sh

# 查看状态
cat dashboard/status.json
```

## 七、安装脚本 (install.sh) 逻辑

```bash
1. 检测环境: bash, curl, mysqldump, wp-cli
2. 创建 /opt/ops-kit/ 目录
3. 复制脚本文件
4. 配置 cron 任务
5. 运行一次初始化备份和检测
6. 输出安装成功信息
```

## 八、与现有 kit 的关系

| kit | 关系 |
|-----|------|
| wordpress-kit | ops-kit 依赖 WP-CLI 执行 wp 命令 |
| marketing-kit | ops-kit 复用其告警邮件通道 |
| deploy-kit | ops-kit 是 deploy-kit 部署完成后装上 |

---

## 九、执行计划

| 步骤 | 内容 | 预估 |
|------|------|------|
| 1 | 写 backup.sh (核心备份脚本) | 30min |
| 2 | 写 monitor.sh (存活/SSL/磁盘检测) | 20min |
| 3 | 写 security-scan.sh (安全扫描) | 20min |
| 4 | 写 update.sh (自动更新) | 15min |
| 5 | 写 install.sh (一键部署) | 15min |
| 6 | 测试全流程 | 20min |
