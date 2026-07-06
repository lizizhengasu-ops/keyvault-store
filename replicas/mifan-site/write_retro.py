import os

BASE = r'C:\Users\31961\Documents\microsoft web\mifan-site\.codex\skills\frontend-kit\references'
docs = {
    'replication-iteration-loop.md': None,
    'auto-iteration-engine.md': None,
}

# Count all fix scripts
fix_dir = r'C:\Users\31961\Documents\microsoft web\mifan-site'
fix_files = [f for f in os.listdir(fix_dir) if f.startswith('fix_v') and f.endswith('.py')]
sub_versions = [f for f in fix_files if f.replace('.py','').split('_')[-1].isalpha() and len(f.split('_')) > 2]
main_versions = [f for f in fix_files if f not in sub_versions]

print(f'Fix scripts:\n  Main: {len(main_versions)}\n  Sub: {len(sub_versions)}\n  Total: {len(fix_files)}')