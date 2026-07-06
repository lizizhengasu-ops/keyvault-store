# Version Comparison - Apple Pages

## Quick Table
| Version | Size | JS | GSAP | ScrollTrigger | Anim | Sections | CSS |
|---------|------|----|------|---------------|------|----------|-----|
| Early test | 9,193 | 3 | Y | Y | Y | 4 | 4,814 |
| V1 - First Full | 13,833 | 3 | Y | Y | Y | 6 | 6,652 |
| V2 - Pipeline | 7,381 | 0 | N | N | N | 3 | 4,275 |
| V4 - Latest Gate | 8,460 | 3 | Y | Y | Y | 5 | 4,221 |

## Key Problems Found

### 1. V2 lost all animations (Codex attention issue)
- Was built during pipeline debugging - context full of code fixes
- Result: 0 scripts, no GSAP, no animations, 3 sections only
- **Root Cause**: Codex output varies based on what's in the conversation context

### 2. Animation gate fixed it
- V2 base (7,381 bytes, no GSAP) -> through gate -> V4 (8,460 bytes, GSAP+ST+anim)
- The gate automatically detected 3 missing items and injected all of them

### 3. V1 is still the richest
- 6 sections, 6,652 CSS bytes, full animations - because Codex focus was on the page
- This is the ideal baseline for quality

## Verdict
- **Animation quality gate works**: Even when Codex forgets, the service catches it
- **Content section quality still varies**: V4 has 5 sections vs V1's 6 - gate doesn't fix content depth
- **Missing**: V4 has testimonials section (V1 does too) - this is good
- **Next improvement needed**: CSS complexity gate (V4 CSS is 4,221 vs V1's 6,652)

