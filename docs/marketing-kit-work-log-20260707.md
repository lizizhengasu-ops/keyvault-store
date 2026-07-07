# marketing-kit - Work Log

> Version: v1.1.0
> Date: 2026-07-07
> Location: microsoft web/marketing-kit/
> Port: 3333

## Architecture

Multi-tenant marketing middleware (System B) + Mailchimp (System A) collaborative architecture.
Handles transactional emails (Resend) and marketing automation (Mailchimp).

## Files

```
src/
├── api/webhooks.ts         WooCommerce webhook handlers (X-Client-ID)
├── api/admin.ts            Test/log endpoints
├── config/clients.ts       Multi-tenant config loader
├── core/mapper.ts          Unified data format conversion
├── middleware/tenant.ts    X-Client-ID + webhook-secret validation
├── services/email.service.ts    Resend transactional email
├── services/mailchimp.service.ts Mailchimp tag/audience sync
├── workers/cron.ts         Hourly WooCommerce abandoned cart scanner
├── utils/helpers.ts        License key generator, formatters
├── index.ts                Entry point + cron startup
```

## Key Decisions

1. Multi-tenant: X-Client-ID header identifies tenants.
2. A+B architecture: System B (Node.js) + System A (Mailchimp).
3. Stateless: No database. clients.json config. Deployable on PaaS.
4. Isolation: Independent package.json + node_modules.

## Endpoints

GET  /health                        Health check
GET  /debug/env                     Config status (redacted keys)
POST /webhook/order-completed       Process order + send email via Resend
POST /webhook/cart-abandoned        Push cart data to Mailchimp
POST /admin/test-email              Manual test

## Testing (5 Rounds)

1. File integrity + imports - OK
2. Error handling + XSS prevention - OK
3. End-to-end logic chain - OK
4. Edge cases + quality gate - OK
5. Final verification - OK

All passed. Zero remaining issues.

## Backups

- Git tag: v1.1.0
- Archive: _archive/marketing-kit-v1.1.0-20260707-*.tar.gz

## Dependencies

- hono + @hono/node-server (web framework)
- resend (transactional email)
- @mailchimp/mailchimp_marketing (marketing API)
- TypeScript + tsx (development)
