import os

refs = r'C:\Users\31961\.codex\skills\copycat-auto\references'
pipe_dir = os.path.join(refs, '..', 'pipeline')
scripts = os.path.join(refs, '..', 'scripts')

# ===== 1) UPDATE RIL doc to match pipeline =====
ril = """# RIL 流程（pipeline 实现版）

## 前置约束检查（由 pipeline/build.py 自动执行）

[PC0] 构建检查：每轮末尾自动跑 npx vite build
[PC1] 设计系统：V2 gate 检查 design-tokens.json 是否存在
[PC2] 一致性：V4-V10 adaptation gate 的 similarity-check 覆盖跨页对比
[PC3] 改法：reject-inline-styles.py 拦截内联样式；禁止二进制替换 .tsx
[PC4] 备份：pipeline 启动时自动备份 src/
[PC5] 范围：自适应门闸要求每轮相似度提升 >= 3%（非固定 3-5 项）

## 循环步骤（由 pipeline 自动执行）

pipeline/build.py 是唯一入口。以下是人需要理解但不需手动执行的逻辑：

0. 前置约束检查 -> python pipeline/build.py（自动调用 preflight-check.py）
1. V2 设计提取：extract-design.py（不是每轮都跑，只在 V2 跑一次）
2. V4-V10 自适应循环：similarity-check.py 替代 visual-diff.py
   a. 测量当前相似度（对比 Apple 所有页面）
   b. 输出最差缺口
   c. 修复缺口
   d. 重新测量，确认提升 >= 3%
   e. 提升不足则版本预算不消耗
3. V10/10 后 BUDGET EXHAUSTED，必须达到 90%

## 文档说明

这份文档是对 pipeline 行为的说明。具体执行请运行 pipeline/build.py。
执行时 pipeline 会读取本文件作为方法论参考。
"""

# ===== 2) UPDATE Engine doc =====
eng = """# Auto-Iteration Engine（pipeline 实现版）

原理：Goal-Gap 闭环 + 三个守卫

守卫 1：效率守卫
- 每轮效率 = 相似度提升（百分点）
- 低于 3% 本轮回滚，版本预算不消耗
- 注意：pipeline 用的是绝对值 >= 3%，不是百分比比例

守卫 2：版本预算守卫（替代子版本守卫）
- 不是限制子版本数，而是限制总版本数（max 10）
- 每个门闸允许多次重试，但总版本数不能超过 10
- 超过 10 版后 BUDGET EXHAUSTED，项目 restart

守卫 3：自动化检查守卫
- 进入 V2 前必须有 design-tokens.json
- V4-V10 必须有 similarity-report.json（替代 visual-diff-report.json）
- reject-inline-styles.py 每轮运行
"""

# ===== 3) UPDATE pipeline/build.py to add backup + preflight =====
build_path = os.path.join(pipe_dir, 'build.py')
with open(build_path, 'rb') as f:
    raw = f.read()
if raw[:3] == b'\xef\xbb\xbf':
    raw = raw[3:]
build = raw.decode('utf-8')

# Add backup step at the start of main()
backup_code = '''
    # PC4: Auto-backup
    import shutil, datetime
    backup_dir = os.path.join(proj, '.backups')
    os.makedirs(backup_dir, exist_ok=True)
    stamp = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
    backup_src = os.path.join(backup_dir, f'src_{stamp}')
    if os.path.exists(os.path.join(proj, 'src')):
        shutil.copytree(os.path.join(proj, 'src'), backup_src)
        print(f'  [BACKUP] src/ backed up to {backup_src}')
    
    # Call preflight-check.py at start
    preflight = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'scripts', 'preflight-check.py')
    if os.path.exists(preflight):
        result = subprocess.run([sys.executable, preflight], cwd=proj)
        if result.returncode != 0:
            print('  [FAIL] Preflight checks failed')
            sys.exit(1)
        print('  [PASS] Preflight checks')
'''

# Insert after the first print statement in main()
insert_marker = "    print(f'Copycat-Auto Pipeline v{ver}/10: {gate_name}')"
build = build.replace(insert_marker, insert_marker + backup_code)

with open(build_path, 'w', encoding='utf-8') as f:
    f.write(build)

# Write updated RIL
with open(os.path.join(refs, 'replication-iteration-loop.md'), 'w', encoding='utf-8') as f:
    f.write(ril)
print('RIL updated')

# Write updated Engine
with open(os.path.join(refs, 'auto-iteration-engine.md'), 'w', encoding='utf-8') as f:
    f.write(eng)
print('Engine updated')

# Verify build.py syntax
compile(build, build_path, 'exec')
print('build.py: syntax valid')

# Count changes
print(f'\nRIL: {len(ril)} chars (was 522)')
print(f'Engine: {len(eng)} chars (was 522)')
print(f'build.py: {len(build)} chars (was ~6600)')