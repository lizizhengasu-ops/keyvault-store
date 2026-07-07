# Marketing-Kit 浜ゆ帴鏂囨。

> 鏈€鍚庢洿鏂? 2026-07-07
> 绉讳氦瀵硅薄: web-market 瀵硅瘽
> 褰撳墠鐘舵€? 鍩虹妗嗘灦宸插畬鎴愶紝绛夊緟杩涗竴姝ュ紑鍙?

---

## 涓€銆侀」鐩綅缃?

- 浠ｇ爜: C:\Users\31961\Documents\microsoft web\marketing-kit\
- 闇€姹傛枃妗? docs/marketing-kit-requirements-20260707.md
- Gemini 鏋舵瀯鍒嗘瀽: docs/ (瑙佷笅杞芥枃浠?gemini-code-*.md)
- 鏈嶅姟鐘舵€? 杩愯涓?(绔彛 3333)

## 浜屻€佸凡瀹屾垚鐨勪唬鐮?

| 妯″潡 | 鏂囦欢 | 璇存槑 |
|------|------|------|
| 椤圭洰楠ㄦ灦 | package.json, tsconfig.json | TypeScript + Hono.js |
| 鍏ュ彛 | src/index.ts | 鏈嶅姟鍚姩 + .env 鍔犺浇 |
| Webhook | src/api/webhooks.ts | order-completed + cart-abandoned |
| 绠＄悊鎺ュ彛 | src/api/admin.ts | 娴嬭瘯瑙﹀彂 |
| 閭欢鏈嶅姟 | src/services/email.service.ts | Resend API 闆嗘垚 |
| Mailchimp | src/services/mailchimp.service.ts | 鐢ㄦ埛鏍囩鍚屾 |

## 涓夈€佸凡閰嶇疆鐨?API 瀵嗛挜

| 鏈嶅姟 | 瀵嗛挜 | 璇存槑 |
|------|------|------|
| Resend | re_xxxxx | 浜ゆ槗閭欢閫氶亾 |
| Mailchimp | xxxxxxxxxx-us1 | 钀ラ攢鑷姩鍖?|
| Mailchimp Audience | xxxxxxxxxx | 鑱旂郴浜哄垪琛?ID |

瀵嗛挜鏂囦欢: marketing-kit/.env

## 鍥涖€丟emini 鍒嗘瀽瑕佺偣

1. **鏋舵瀯**: System B (Node.js) + System A (Mailchimp) 鍗忓悓
2. **浜ゆ槗閭欢**: Webhook 瑙﹀彂 鈫?Resend 鍙戦€?(鍚縺娲荤爜)
3. **寮冭喘鎸藉洖**: 闇€瑕?PHP snippet 鏀惧埌 functions.php 鎴栧墠绔?SPA 妫€娴?
4. **鏍囧噯鍖栧崗璁?*: 缁熶竴鏁版嵁鏍煎紡 {email, product, source, timestamp}
5. **瀹夊叏楠岃瘉**: x-webhook-secret header 鏍￠獙

## 浜斻€佸緟瀹屾垚浜嬮」

| 浜嬮」 | 浼樺厛绾?| 璇存槑 |
|------|--------|------|
| 寮冭喘瑙﹀彂鏂规鍐崇瓥 | P0 | 閫?PHP + cron / 鍓嶇 SPA / 鎴栨贩鍚?|
| WooCommerce Webhook 閰嶇疆 | P0 | 鍚庡彴閰嶇疆璁㈠崟瀹屾垚 webhook |
| Resend 鍩熷悕楠岃瘉 | P1 | 楠岃瘉鍙戜欢鍩熷悕鎵嶈兘鐢?orders@keystarter.com |
| Mailchimp Journey 閰嶇疆 | P1 | 閰嶇疆寮冭喘鎸藉洖 1h/24h/72h 娴佺▼ |
| React-Email 妯℃澘 | P2 | 浠ｇ爜鍖栭偖浠舵ā鏉?|
| 澶氬鎴峰崗璁敮鎸?| P2 | 鏍囧噯鍖栨帴鍏ユ枃妗?|

## 鍏€佸惎鍔ㄦ柟寮?

`ash
cd marketing-kit
npm install   # 濡傛灉 node_modules 涓嶅瓨鍦?
npm run dev   # 鍚姩鏈嶅姟 (绔彛 3333)
`

## 涓冦€丄PI 绔偣

| Method | Path | 璇存槑 |
|--------|------|------|
| GET | /health | 鍋ュ悍妫€鏌?|
| GET | /debug/env | 鏌ョ湅 API 瀵嗛挜鐘舵€?|
| POST | /webhook/order-completed | 璁㈠崟瀹屾垚 (鍚縺娲荤爜) |
| POST | /webhook/cart-abandoned | 寮冭喘浜嬩欢 |
| POST | /admin/test-email | 鎵嬪姩娴嬭瘯閭欢 |

---

*鏈枃妗ｇ敱 main 瀵硅瘽浜?2026-07-07 鐢熸垚锛屼緵 web-market 瀵硅瘽鎺ユ墜浣跨敤銆?
