# Ops-Kit 最终计划

## 一、架构

Ops-kit 装在我们的机器上，通过 SSH + curl 远程管理所有客户站点。
客户服务器上不安装任何 ops-kit 文件。

```
我们的机器                               客户服务器
┌─────────────────────┐                 ┌──────────────┐
│ /opt/ops-kit/        │    SSH         │              │
│ ├── sites.yml        │  ──────→       │ WordPress    │
│ ├── scripts/         │    curl        │ WooCommerce  │
│ │   ├── monitor.sh   │  ──────→       │ MySQL        │
│ │   ├── backup.sh    │                │ 无 ops 文件  │
│ │   ├── security.sh  │                └──────────────┘
│ │   └── update.sh    │
│ └── data/            │
│     └── site-xxx/    │ 备份文件
└─────────────────────┘
```

## 二、sites.yml 配置

所有客户站点集中管理，一个文件搞定：

```yaml
sites:
  - name: keystarter
    domain: aliali.local
    ssh_user: root
    ssh_host: 127.0.0.1
    ssh_port: 22
    wp_path: /app/public
    db_name: local
    db_user: root
    db_pass: root
    db_host: 127.0.0.1:10007
    web_port: 80
    alert_email: admin@keystarter.com

  - name: client-a
    domain: client-a.com
    ssh_user: root
    ssh_host: x.x.x.x
    wp_path: /var/www/html
    db_name: wp_client_a
    db_user: wp_user
    db_pass: xxx
    alert_email: us@keystarter.com
```

## 三、4 个脚本 + 工作流

### 3.1 monitor.sh — 站点存活监控 (每 5 分钟)

```bash
对每个站点:
  1. curl http://$domain/ → 检测 HTTP 200
  2. ssh → mysqladmin ping → 检测数据库
  3. ssh → openssl 检测 SSL 到期日
  4. ssh → df -h → 检测磁盘 (>80% 告警)
  5. 任意失败 → 邮件告警发到 alert_email
```

### 3.2 backup.sh — 自动备份 (每天 03:00)

```bash
对每个站点:
  1. ssh → mysqldump ... > /tmp/backup.sql
  2. ssh → tar wp-content/
  3. 通过 SCP 拉回我们的 data/ 目录
  4. 本地保留: 最近 7 天每日 + 4 周 + 12 月
  5. 生成 backup.log
```

### 3.3 security.sh — 安全扫描 (每天 06:00)

```bash
对每个站点:
  1. ssh → wp core verify-checksums
  2. ssh → find wp-content/ -name "*.php" -mtime -7 (检查新增可疑文件)
  3. ssh → wp user list --role=administrator (检查管理员)
  4. 发现异常 → 邮件告警
```

### 3.4 update.sh — 自动更新 (每周日 04:00)

```bash
对每个站点:
  1. 先跑 backup.sh (确保更新前有备份)
  2. ssh → wp plugin update --all --dry-run (预览)
  3. ssh → wp core update + wp plugin update --all --minor
  4. curl http://$domain/ (检查更新后站点是否正常)
  5. 如果宕机 → 从备份恢复
  6. 生成更新报告
```

## 四、告警

所有脚本异常都通过邮件通知。告警模板:

```
[ops-kit] CRITICAL: keystarter - 站点宕机
[ops-kit] WARNING: client-a - SSL 还 12 天到期
[ops-kit] INFO: keystarter - 更新成功 (wp 5.8 → 5.9, 3 plugins)
```

邮件走我们自己的 SMTP (和 marketing-kit 共用 Resend)。

## 五、文件结构

```
/opt/ops-kit/
├── sites.yml              # 所有客户站点配置
├── scripts/
│   ├── monitor.sh         # 站点监控
│   ├── backup.sh          # 远程备份
│   ├── backup-restore.sh  # 远程恢复
│   ├── security.sh        # 安全扫描
│   └── update.sh          # 自动更新
├── lib/
│   └── utils.sh           # 公用函数 (日志/告警/SSH)
├── data/
│   └── site-{name}/       # 各站备份
│       ├── db/            # 数据库备份
│       └── files/         # wp-content 备份
├── logs/
│   └── {script}-{date}.log
└── install.sh             # 一键部署到我们机器
```

## 六、crontab 配置

```cron
# 站点监控 (每 5 分钟)
*/5 * * * * /opt/ops-kit/scripts/monitor.sh

# 自动备份 (每天 03:00)
0 3 * * * /opt/ops-kit/scripts/backup.sh

# 安全扫描 (每天 06:00)
0 6 * * * /opt/ops-kit/scripts/security.sh

# 自动更新 (每周日 04:00)
0 4 * * 0 /opt/ops-kit/scripts/update.sh
```

## 七、执行顺序

| 步骤 | 内容 | 预计 |
|------|------|------|
| 1 | 写 lib/utils.sh (SSH/日志/告警基础功能) | 15min |
| 2 | 写 monitor.sh (核心监控脚本) | 20min |
| 3 | 写 backup.sh (远程备份脚本) | 25min |
| 4 | 写 backup-restore.sh (恢复脚本) | 15min |
| 5 | 写 security.sh (安全扫描) | 20min |
| 6 | 写 update.sh (自动更新) | 20min |
| 7 | 写 install.sh + sites.yml 模板 | 10min |
| 8 | 本地测试 (用 aliali.local 模拟) | 15min |
