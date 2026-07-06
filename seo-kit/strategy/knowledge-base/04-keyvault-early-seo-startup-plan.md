# KeyVault Windows/Office 激活码独立站 — 早期SEO启动方案

> 基于: SEO Kit v1.0.0 | 大罗SEO 6课 | Ahrefs/Backlinko/Shopify/Moz 行业研究
> 适用: 站点可访问前3个月

---

## 1. 核心策略

只做三件事:
1. 让Google能发现并收录页面 — 技术SEO地基
2. 让收录的页面有完整SEO标签 — On-Page SEO
3. 开始获取第一批长尾流量 — 内容SEO

不做: 外链(第3月后) / 大量内容(每周1篇) / 社交媒体 / 付费广告

---

## 2. 第1周: 技术上线 (P0, 2天工)

### 2.1 HTTPS + 域名上线
购买域名 + SSL证书 + 部署。Google对HTTPS有排名加权。

### 2.2 启动SEO Kit + 确认产品页正常
所有产品页通过 seoKit.generate() 生成SEO标签。curl确认200返回。
产品页: /product/windows-11-pro-key, /product/windows-11-home-key
        /product/windows-10-pro-key, /product/windows-10-home-key
        /product/office-2019-pro-plus-key
        /product/*-bundle (4个)

### 2.3 Google Search Console + Bing Webmaster
提交站点 + sitemap.xml。确认开始收录。

### 2.4 robots.txt + sitemap.xml
Allow: / | Sitemap指向

### 2.5 分类页确认
/windows-keys, /windows-11-keys, /windows-10-keys, /office-keys

### 2.6 运行 seoKit.report()
确认 avgScore >= 80, issues为0

---

## 3. 第2周: On-Page优化 (P1, 2天工)

### 3.1 用validate检查所有产品页
Title 30-65字符 + Description 50-165字符。每页必须通过。

### 3.2 产品描述扩展 (当前1句扩展到200-500字)
每个产品需含: 简介(含关键词) + 3-5亮点 + 适用场景 + 信任信号

示例(Win 11 Pro):
`
Genuine Windows 11 Pro OEM License Key...
Key Features:
- BitLocker encryption, Remote Desktop, Hyper-V, Sandbox
Ideal for: Small business PCs, professional workstations, developers
`

### 3.3 /b2b 页面内容填充
批量采购价格阶梯 + 企业权益 + WhatsApp入口 + 私域转化

### 3.4 FAQ页面 (10+个问题)
使用 FAQPage Schema (SEO Kit自动生成)
问题覆盖: OEM安全吗/怎么激活/OEM vs Retail/转移许可证/批量优惠等

### 3.5 内部链接
产品页底部 + 分类页交叉链接

### 3.6 全站analyze扫描 + 修复问题

---

## 4. 第3-4周: 首批内容 (4篇)

| 周 | 文章 | 类型 | 目标关键词 |
|----|------|------|-----------|
| 3 | Windows 11 Pro vs Home对比 | 对比文 | win11 pro vs home |
| 3 | 如何用OEM密钥激活Win11 | 教程文 | activate windows 11 |
| 4 | Win10 vs Win11哪个适合你 | 对比文 | windows 10 vs 11 |
| 4 | OEM vs Retail密钥区别 | 科普文 | oem vs retail key |

每篇文章用 seoKit.generate({type:'guide',...}) 生成SEO标签。
发布前检查清单: Title/Description/H1/关键词出现/产品链接/CTA/validate通过

---

## 5. 第2个月: 数据驱动优化

- 查Search Console: 哪些页面被收录/哪些搜索词有曝光
- 运行 seoKit.report(): avgScore趋势/commonIssues/suggestions
- 根据数据调整: 收录问题/低点击率/无曝光

---

## 6. 第3个月: 开始扩展

### 内容加速到每周2篇
- Best Windows Keys for Business 2026 (列表文)
- Office 2019 vs Microsoft 365 (对比文)
- Bulk Windows License Key Guide (B2B文)

### 开始外链
- Trustpilot + Sitejabber 目录提交
- GitHub项目 (激活相关文档)
- Reddit r/WindowsHelp 参与

---

## 7. 日常维护节奏

每日(5分): 检查服务是否运行
每周(15分): 运行report() + Search Console检查
每月(30分): 发1-2篇文章 + 全站analyze扫描

---

## 8. 预期里程碑

第1周: 站点可被收录 (Search Console > 0)
第2周: 所有产品页validate通过
第3-4周: 内容被收录
第2个月: 长尾词开始有曝光
第3个月: B2B词开始有曝光
第6个月: B2B询盘从搜索流入
