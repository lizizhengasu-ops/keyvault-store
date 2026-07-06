# WordPress Kit 调研结论

## 搜索了 3 轮 GitHub 的结果

| 搜索 | 结果 | 可用的 |
|------|------|--------|
| WP child theme generator | 1 个结果（1 star） | ❌ 不可用 |
| Page template generator | 1 个结果（1 star） | ❌ 不可用 |
| Theme boilerplate/scaffold | 0 个结果 | ❌ 没有 |
| Code generator | 11 个结果（全是政治内容） | ❌ 不可用 |
| WP-CLI scaffold | wp-cli/scaffold-command (172 stars) | ⚠️ 可用但只是骨架 |
| Underscores/Sage | 搜索结果空白 | ❌ 无结果 |

## 唯一可用的工具：WP-CLI scaffold-command

  wp scaffold post-type <slug>
  wp scaffold taxonomy <slug>  
  wp scaffold theme <slug> --activate
  wp scaffold child-theme <slug> --parent_theme=astra
  wp scaffold plugin <slug>
  wp scaffold block <slug>

它能生成基础骨架，但不含设计、不含页面内容、不含 AI 分析。

## 结论

没有现成的解决方案。wordpress-kit 的 4 个脚本需要我们自己写。

## 建议的技术方案

| 脚本 | 技术方案 |
|------|---------|
| subtheme_generator.py | Python 生成 style.css + functions.php + 模板文件，支持 --parent=astra |
| page_template_gen.py | Python 生成 PHP 页面模板，含 get_header/get_footer/wp_head/wp_footer |
| wp_agent_orchestrator.py | Python 编排：Hermes 设计 → subtheme_gen → page_gen → QualityGates |
| deploy_package.py | Python 打包为 .zip，结构适配 WordPress 上传 |

其中 subtheme_generator 可以调用 WP-CLI 的 wp scaffold child-theme 作为底层。
