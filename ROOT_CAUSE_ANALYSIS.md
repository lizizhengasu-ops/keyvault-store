# B2B Component Syntax Error - Root Cause Analysis

Date: 2026-06-26
Component: b2b-component-plain.js (8 React modules)

## Incident Summary

The B2B wholesale page at /b2b-wholesale/ rendered completely blank due to a
JavaScript syntax error in b2b-component-plain.js. The IIFE failed to execute
at parse time, so none of the 8 React modules were registered or rendered.

## Root Cause

### 1. Minified JS is error-prone (Primary Cause)

b2b-component-plain.js is a minified single-line JS file where each function return
statement is a deeply nested React.createElement() call with 20-30 levels of
parentheses (line 30 was 2018 chars). When an LLM generates or modifies this
code, syntax errors are highly probable because:
- No whitespace/indentation to visually verify nesting
- Hundreds of parentheses on one line
- Ternaries mixed with function calls compound nesting complexity

### 2. No syntax validation after generation

After the file was created, no syntax check was run. A simple
node --check b2b-component-plain.js would have caught the error immediately.

### 3. No backup before fixing

When attempting to fix the corrupted file, no backup was made of the original.
The rstip() approach made the file worse by removing ALL trailing closing parens.

## Symptoms

- SyntaxError: Unexpected token ) at line 30
- Page blank: WordPress renders but React modules dont mount
- Paren count balanced (262/262) but structural ordering wrong
- Error in 2018-char single line with nodes.map + nested ternaries

## Debugging Approach That Worked

1. node --check to find the error line
2. Remove line 30, re-check -- file passes, error confirmed in that line
3. Replace nodes.map() with simple array -- file passes, error in map
4. Remove i<3?e(svg...):null from map -- file passes, error in SVG section
5. Rewrite entire line 30 from known-correct source
6. Verify with node --check -- passed

## Lessons & Rules

### Rule 1: Always validate JS syntax after creation
Run: node --check path/to/file.js before deployment.

### Rule 2: Never hand-write minified JavaScript
Maintain the .jsx (source) version and compile to plain JS.
Keep b2b-component.jsx as the human-readable source.

### Rule 3: Always backup before fixing syntax errors
Copy target.js target.js.bak before ANY syntax fix.

### Rule 4: Debug minified code by elimination
1. node --check to find error line
2. Remove that line, re-check
3. If passes, error is in removed line
4. Binary search within the line by removing sections
5. Narrow down to smallest failing expression

### Rule 5: Never use rstrip() on JS code
rstrip() removes ALL trailing closing parens, breaking nesting.
Instead: rewrite the entire function from known-correct code.

### Rule 6: Encoding consistency
Use UTF-8 without BOM for JS files.
Python open() with encoding=utf-8-sig to handle BOM input.
Node.js reads BOM as \ufeff causing SyntaxError.

## File Change History

| Action | File | Result |
|--------|------|--------|
| Initial creation | b2b-component-plain.js | Syntax error (extra )) |
| rstip() fix attempt | b2b-component-plain.js | Worse - too many parens removed |
| Line 30 replaced (clean) | b2b-component-plain.js | Syntax OK - page renders |

## Future Prevention

Use the .jsx file as source of truth:
- Edit b2b-component.jsx (JSX source, readable)
- Validate with node --check
- Generate/compile to b2b-component-plain.js
- Run syntax check again

Never hand-edit the .plain.js file directly.
