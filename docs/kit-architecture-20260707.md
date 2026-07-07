# KeyStarter 独立站运营体系 — Kit 架构总览

> 最后更新: 2026-07-07
> 来源: main 对话全量复盘
> 位置: docs/kit-architecture-20260707.md

---

## 一、核心定义

**main** 是中央控制台。**kit** 是独立隔离的运营工具箱。每个 kit 有独立的文件系统、版本号和调用接口（CLI/HTTP/进程间通信）。kit 之间不互相依赖、不互相集成。

## 二、定型方案：5 个运营 Kit

行业标准参考：BigCommerce、Ahrefs、Shopify、大罗SEO 6集课程、Backlinko、Moz。
实际需求验证：基于 20 个软件授权产品的独立站日常运营。

### 已有（3 个核心）

| # | Kit | 状态 | 位置 | 职责 | 调用方式 |
|---|-----|------|------|------|---------|
| 1 | **frontend-kit** | ✅ 完成 | .codex/skills/frontend-kit/ + _archive/ | 前端站点生成、页面构建 | 内部 pipeline |
| 2 | **wordpress-kit** | ✅ 完成 | .codex/skills/wordpress-kit/ | WordPress/WooCommerce 管理、产品同步、订单处理 | REST API (:11446) |
| 3 | **seo-kit** | ✅ 完成 | microsoft web/seo-kit/ | SEO 标签生成、结构化数据、元数据注入 | CLI / HTTP (:3099) |

### 已存在但不计入运营 Kit

| 名称 | 位置 | 为什么不算 | 归属 |
|------|------|-----------|------|
| copycat-auto | .codex/skills/copycat-auto/ | frontend-kit 的建子模式（复刻 vs 手写） | frontend-kit 子模块 |
| copycat-manual | .codex/skills/copycat-manual/ | copycat 手动版 | frontend-kit 子模块 |
| multi-skill | .codex/skills/multi-skill/ | 开发编排工具，非运营工具 | main 协议层 |
| store-intel | .codex/skills/store-intel/ | 竞品调研工具，非日常运营 | data-kit 分析子模块 |

### 待建（2 个）

| # | Kit | 状态 | 职责 | 原因 |
|---|-----|------|------|------|
| 4 | **marketing-kit** | ⬜ 未建 | 邮件营销、促销活动、转化分析 | WooCommerce 邮件仅够发通知，不够做营销自动化 |
| 5 | **data-kit** | ⬜ 未建 | 批量操作、多语言同步、运营报表 | WooCommerce CSV 不够灵活，复杂操作需代码 |

## 三、行业对标分析

### 行业独立站标准技术栈

来源：BigCommerce Ecommerce Stack、Ahrefs SEO Checklist、Shopify 生态、大罗SEO 课程

| 层 | 行业标准工具 | WooCommerce 自带 | 我们的 Kit |
|----|------------|-----------------|-----------|
| 前端展示 | 自定义主题 / Shopify Themes | ❌ 简陋 | frontend-kit |
| 商务引擎 | WooCommerce / Shopify | ✅ 完整 | wordpress-kit |
| SEO | Yoast / RankMath / Ahrefs | ⚠️ 基础 | seo-kit |
| 邮件营销 | Mailchimp / Klaviyo | ⚠️ 仅通知 | marketing-kit（待建） |
| 数据分析 | GA / Hotjar / 平台报表 | ⚠️ 基础报表 | data-kit（待建） |
| 批量操作 | 自建脚本 / CSV | ⚠️ 基础 CSV | data-kit（待建） |

### 关键判断依据

1. **copycat 不单独算 kit**：建站只有两种方式——从零手写（frontend-kit）或复制参考站（copycat）。它们服务于同一个目的，拆开成两个运营 kit 会造成混淆。
2. **marketing 需要新建**：行业标准要求邮件营销自动化（弃购挽回、客户分群、促销活动）。WooCommerce 的邮件功能只覆盖交易通知。
3. **data 需要新建**：批量更新价格、同步库存、多语言内容管理、自动生成报表，这些超出了 WooCommerce CSV 的能力范围。

## 四、当前已完成项目

### keystarter 独立站

| 项目 | 位置 | 状态 |
|------|------|------|
| 前端（Vite + React + TypeScript） | _projects/keystarter/ | ✅ 9 页全部 200 |
| 端口 | 8117 | ✅ 运行中 |
| 产品数据 | 20 个微软软件授权 | ✅ 已替换 |
| 品牌文字 | mPhone/mifan → KeyStarter | ✅ 无残留 |
| SEO 注入 | 通过 seo-kit CLI | ✅ 已集成 |
| WooCommerce 产品同步 | aliali.local | ✅ 20 产品已创建 |

### 其他项目

| 项目 | 位置 | 状态 |
|------|------|------|
| ms-replica (微软复刻) | _projects/ms-replica/ 8116 | ✅ |
| mifan-site | eplicas/mifan-site/ | ✅ 存档在模板库 |
| apple-replica | 8090 | 🔴 P0 - 源码丢失 |

## 五、备份与版本

| 对象 | 备份位置 | 版本 |
|------|---------|------|
| frontend-kit | _archive/frontend-kit-v1.0.0-20260706-123745.tar.gz | v1.0.0 |
| ms-replica 模板 | _templates/ms-replica-v5-.../ | v5 |
| keystarter 恢复指南 | _projects/keystarter/RESTORE_GUIDE.md | v1 |

## 六、Main 协议

详见 main-protocol.md。核心规则：
1. main 不做实现，只做编排调度
2. kit 不集成，只通过 CLI/HTTP 调用
3. 不相互干扰，每个 kit 独立隔离
4. 修改前必须备份

---

*本文档由 main 对话于 2026-07-07 自动生成，用于知识留存和后续复盘。*