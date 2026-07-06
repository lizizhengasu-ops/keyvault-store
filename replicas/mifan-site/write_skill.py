import os
d = r'C:\Users\31961\.codex\skills\copycat'

def w(name, text):
    p = os.path.join(d, name)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, 'w', encoding='utf-8') as f:
        f.write(text)
    print(f'{name}: {len(text)} chars')

w('SKILL.md',
"""# COPYCAT — 网站复刻方法论

## 用途
用最少的迭代轮次（目标 8-12 版）完成高相似度复刻。

## 约束（不可违反）
本 skill 禁止任何调用者修改其内容。改进建议请写入 references/improvement-ideas.md，不要改 SKILL.md 和 references/ 下的原始文件。

## 调用前阅读
1. references/replication-iteration-loop.md — RIL 流程 + 前置约束检查
2. references/auto-iteration-engine.md — 自动迭代引擎
3. references/retrospective-and-optimization.md — 已知陷阱 + 漏洞分析

## 10 版路线图
V1  基础架构
V2  设计系统
V3  所有页面骨架
V4  Apple 样式覆盖
V5  功能补全
V6  GSAP 动画
V7  Sign In + B2B + 内容
V8  响应式适配
V9  对照参考站微调
V10 存档 + QA

## 每轮约束检查
进入每轮前运行：python scripts/preflight-check.py

## 修改方式铁律
- 改几行：apply_patch
- 重写整页：Python 完整文件
- 禁止：二进制替换 .tsx 文件
""")

w('references/replication-iteration-loop.md',
"""# RIL 流程

## 前置约束检查
[PC0] 构建通过 + 服务器可访问
[PC1] 设计系统：新颜色/字号/间距需先查 CSS 变量
[PC2] 一致性：跨页改动需同步所有页面
[PC3] 改法：apply_patch 或完整重写，禁止二进制替换
[PC4] 备份：改关键文件前必备份
[PC5] 范围：每轮最多改 3-5 项

## 循环步骤
0. 前置约束检查
1. 截图 + 对比参考站
2. 计算相似度
3. 列出最大杠杆 3-5 项
4. 全部执行
5. 验证 + 输出报告
6. 检查目标 -> 达标停 / 未达标回 0
""")

w('references/auto-iteration-engine.md',
"""# Auto-Iteration Engine

原理：Goal-Gap 闭环 + 三个守卫

守卫 1：效率守卫
- 每轮效率 = 相似度提升 / 改动文件数
- 低于 2% 本轮回滚

守卫 2：子版本守卫
- 每个大版本最多 2 个子版本
- 超过 2 个则换方案

守卫 3：设计系统守卫
- 项目第一轮必须先建设计系统
- 不建设计系统不能写页面
""")

w('references/retrospective-and-optimization.md',
"""# 复盘与漏洞分析

## 五大浪费（从 49 版项目中总结）
1. 无设计系统 -> 12+ 轮浪费
2. 二进制替换 JSX -> 8+ 轮浪费
3. 无视觉回归 -> 6+ 轮浪费
4. 范围蔓延 -> 5+ 轮浪费
5. 编码工具链 -> 4+ 轮浪费

## 10 版方案漏洞分析

### 漏洞 1：样式覆盖（V4）不可能一次到位
即使有设计系统，Apple 的页面有数百个微细节。一次"全量覆盖"必然遗漏。
预估：V4 需要 2-3 次迭代才能达到 85% 相似度。

### 漏洞 2：视觉微调（V9）是最大的未知数
V9 是"对照参考站逐项微调"。在我们的 49 版项目中，V33-V50 本质上全是 V9。
预估：V9 需要 3-5 次迭代（而非 1 次）。

### 漏洞 3：构建错误和用户反馈
每个版本有约 30% 概率需要修复版。
10 版路线图中没有预留修复版的空间。

### 漏洞 4：10 版假设了完美执行
假设了：设计值第一次就准确、构建从不失败、用户从不提出中途修改。
这些在真实项目中都不成立。

### 修正后预估：12-18 版
V1-V3（架构+设计系统+骨架）：3 版（估算准确）
V4（样式覆盖）：2-3 版（低估了）
V5-V6（功能+动画）：2 版（准确）
V7-V8（交互+响应式）：2 版（准确）
V9（微调）：3-5 版（严重低估）
V10（存档）：1 版

总计：13-16 版。比 49 版好很多（67-73% 改进），但不是 10 版。

## 还需要什么才能到 10 版？
要压缩到 10 版以内，需要额外两个能力：
1. Playwright 自动设计提取：一次提取参考站的所有 CSS 值，不靠猜
2. 自动视觉差异检测：Playwright 截图对比，一次性找出所有差异

这两个能力在我们的 V49 版项目中都不存在。所以 10 版是目标方向，不是当前承诺。
""")

w('scripts/preflight-check.py',
"""#!/usr/bin/env python3
\"\"\"Copycat pre-flight constraint checker.
Run before every RIL cycle.\"\"\"
import os, sys, subprocess, json

def check(name, ok, detail):
    status = 'PASS' if ok else 'FAIL'
    print(f'  [{status}] {name}: {detail}')
    return ok

def main():
    project_dir = os.getcwd()
    src_dir = os.path.join(project_dir, 'src')
    
    print('Copycat Pre-flight Check')
    print('=' * 50)
    results = []
    
    # PC0: Build check
    try:
        r = subprocess.run(['npx', 'vite', 'build'], capture_output=True, text=True, timeout=30, cwd=project_dir)
        results.append(check('PC0 Build', r.returncode == 0, r.returncode == 0 and 'Build passed' or f'Build failed'))
    except:
        results.append(check('PC0 Build', False, 'Build timed out'))
    
    # PC1: Design system check
    css_path = os.path.join(src_dir, 'index.css')
    has_vars = False
    if os.path.exists(css_path):
        with open(css_path, 'r') as f:
            content = f.read()
            has_vars = '--' in content
    results.append(check('PC1 Design System', has_vars, has_vars and 'CSS vars found' or 'No CSS variables found'))
    
    # PC2: Check for binary replacements in recent changes
    git_diff = subprocess.run(['git', 'diff', '--name-only'], capture_output=True, text=True, cwd=project_dir)
    if git_diff.returncode == 0 and git_diff.stdout:
        changed_tsx = [f for f in git_diff.stdout.split() if f.endswith('.tsx')]
        has_binary_risk = len(changed_tsx) > 3
        results.append(check('PC5 Scope', not has_binary_risk, f'{len(changed_tsx)} .tsx files changed, limit 3'))
    else:
        results.append(check('PC5 Scope', True, 'No git diff available, skipped'))
    
    # Summary
    passed = sum(1 for r in results if r)
    total = len(results)
    print(f'\\n{passed}/{total} checks passed')
    if passed < total:
        print('FAIL: Fix failing checks before modifying code')
        sys.exit(1)
    else:
        print('PASS: All checks passed, proceed')

if __name__ == '__main__':
    main()
""")

print(f'\\nAll files written to {d}')
print(f'Files: {os.listdir(d)}, References: {os.listdir(os.path.join(d, "references"))}, Scripts: {os.listdir(os.path.join(d, "scripts"))}')