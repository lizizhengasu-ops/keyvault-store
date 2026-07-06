 # Git 学习笔记
 
 学习日期：2026-07-06
 
 ## 理解的概念
 
 - **commit** = 给项目拍一张快照，可以随时回到这个状态
 - **git 不修改文件内容**，只记录和恢复版本
 - 每次修改完一个完整单位就提交一次
 - 提交到 GitHub（private 仓库）就是云端备份
 
 ## 常用场景
 
 - `git status` — 看看当前改了哪些文件
 - `git add . + git commit` — 存档
 - `git push` — 上传到 GitHub
 - `git checkout 文件名` — 撤销单个文件的修改
 - `git log` — 看所有版本记录
 
 ## 项目结构
 
 ```
 microsoft web/
 ├── wordpress/   — WordPress 功能代码
 ├── front/       — 前端组件
 ├── seo/         — 竞品分析数据
 ├── tools/       — 修复/部署脚本
 ├── replicas/    — 站点副本
 └── docs/        — 文档
 ```
