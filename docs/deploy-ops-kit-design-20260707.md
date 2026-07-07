# Deploy-Kit + Ops-Kit 方案设计

> 研究来源: BigCommerce Ecommerce Stack · WooCommerce 官方文档 · WPBeginner 检查清单 · WordPress 安全手册 · GitHub 项目
> 编写日期: 2026-07-07

---

## 一、背景

当前我们已有 6 个运营 kit（frontend/copycat/wordpress/seo/marketing/data），覆盖了建站、商务、营销、数据四个域。
但缺少"从本地到上线"的部署链路和"上线后持续运维"的能力。

## 二、行业标准参考

从 BigCommerce 的 Ecommerce Technology Stack 分类来看，一个完整的独立站需要:

| 域 | 我们已经覆盖 | 还缺 |
|----|------------|------|
| Platform (平台) | frontend-kit, wordpress-kit | — |
| Payments (支付) | — | 支付网关对接 |
| Data & Analytics (数据与分析) | data-kit | GA 接入, 转化跟踪 |
| Security & Compliance (安全合规) | — | 备份, 安全, 法律页面 |
| Customer Success (客户服务) | — | 客服系统 |

## 三、新增 Kit: deploy-kit

### 定位
将本地开发好的项目一键部署到生产环境。包含服务器初始化、域名配置、WooCommerce 配置、基础设施搭建。

### 功能清单

| 模块 | 功能 | 实现方式 | 优先级 |
|------|------|---------|--------|
| **server** | 云服务器初始化 (nginx + PHP 8.x + MySQL + Redis) | SSH + Bash 脚本 | P0 |
| **ssl** | Let's Encrypt SSL 自动配置 | Certbot + cron 续期 | P0 |
| **domain** | DNS 配置指引 + Nginx 站点配置 | 模板生成 | P0 |
| **wordpress** | WP-CLI 自动安装 WordPress + WooCommerce | WP-CLI 脚本 | P0 |
| **smtp** | SMTP 邮件服务配置 (SendGrid/Mailgun) | WordPress wp-config 配置 | P1 |
| **payment** | 支付网关自动配置 (Stripe/PayPal) | WooCommerce REST API | P1 |
| **legal** | 法律页面模板 (隐私政策/服务条款/退款政策) | 模板 + WP-CLI 发布 | P2 |

### 工作流程

```
keystarter (本地开发)
    |
    |  npm run build
    v
dist/ (构建产物)
    |
    | deploy-kit deploy --server x.x.x.x --domain store.keystarter.com
    v
生产服务器 (Ubuntu + Docker 或裸机)
    ├── nginx → 静态文件
    ├── PHP-FPM → WordPress
    ├── MySQL → 数据库
    ├── Redis → 缓存
    └── Certbot → SSL
    |
    | WP-CLI import
    v
WooCommerce (产品/订单/用户 迁移完成)
```

### 依赖
- 目标服务器: Ubuntu 22.04+ / Debian 11+
- 本地环境: SSH 访问, Node.js, WP-CLI (远程)
- 外部服务: 域名 DNS, SMTP 服务 (SendGrid/Mailgun)

## 四、新增 Kit: ops-kit

### 定位
生产环境持续运维工具箱。包含备份、安全、监控、更新管理。

### 功能清单

| 模块 | 功能 | 实现方式 | 优先级 |
|------|------|---------|--------|
| **backup** | 自动备份 (数据库 + wp-content + uploads) | cron + rsync/S3 | P0 |
| **security** | 安全扫描 + 文件权限修复 + 登录保护 | Bash + WP-CLI 插件管理 | P1 |
| **monitor** | 站点健康监控 (HTTP 200检测 + SSL 过期提醒) | curl cron + 邮件告警 | P1 |
| **update** | WordPress + 插件自动更新管理 | WP-CLI 脚本 | P1 |
| **analytics** | Google Analytics + 转化跟踪注入 | 前端模板 | P2 |
| **logs** | 错误日志轮转 + Nginx/PHP 错误监控 | 脚本 + 告警 | P2 |

### 工作流程

```
cron (每天)
    ├── backup.sh
    │   ├── mysqldump → 压缩 → S3/本地归档
    │   └── wp-content/ → tar → S3/本地归档
    │
    ├── security-scan.sh
    │   ├── 检查文件权限
    │   ├── 扫描可疑文件
    │   └── 报告发送
    │
    ├── monitor.sh (每5分钟)
    │   ├── curl 站点 → 200 检测
    │   ├── SSL 到期检查
    │   └── 失败 → 邮件告警
    │
    └── update.sh (每周)
        ├── wp core update
        ├── wp plugin update --all
        └── wp theme update --all
```

### 依赖
- 服务器: SSH 访问, crontab, mysqldump
- 存储: 本地磁盘或 S3 兼容对象存储 (用于备份存放)
- 告警: SMTP 邮件通道 (与 marketing-kit 共用 Resend/SendGrid)

## 五、与现有 Kit 的关系

```
      现有 6 kit                 新增 2 kit
 ┌─────────────────┐    ┌──────────────────┐
 │ frontend-kit     │    │ deploy-kit       │
 │ copycat          │    │ ├── server init  │
 │ wordpress-kit    │───→│ ├── ssl/domain   │
 │ seo-kit          │    │ ├── wp install   │
 │ marketing-kit    │    │ ├── payment/tax  │
 │ data-kit          │    │ └── legal pages │
 └─────────────────┘    └──────────────────┘
                                 │
                         ┌───────┴────────┐
                         │   生产服务器     │
                         └───────┬────────┘
                                 │
                        ┌────────v────────┐
                        │   ops-kit       │
                        │ ├── backup      │
                        │ ├── security    │
                        │ ├── monitor     │
                        │ ├── update      │
                        │ └── analytics   │
                        └─────────────────┘
```

## 六、预估工作量

| Kit | 模块数 | 行数估计 | 工时估计 |
|-----|--------|---------|---------|
| deploy-kit | 7 | ~500 行脚本 | 1-2 次对话 |
| ops-kit | 6 | ~400 行脚本 | 1-2 次对话 |

## 七、后续执行顺序

1. 🔲 deploy-kit — 先做 server + ssl + wordpress 三个核心模块
2. 🔲 ops-kit — 先做 backup + security 两个核心模块
3. 🔲 后续补齐 payment / analytics / monitor
