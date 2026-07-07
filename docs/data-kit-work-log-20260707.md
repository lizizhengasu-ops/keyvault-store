# data-kit - Work Log

Version: v1.0.0 | Date: 2026-07-07 | Port: 4444

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /health | Health |
| GET | /debug/env | Config |
| POST | /batch/import | Import products |
| POST | /batch/update | Update products |
| GET | /batch/export | Export CSV |
| POST | /translate/products | Translate (DeepL) |
| POST | /reports/sales | Sales CSV |
| GET | /reports/summary | Order stats |

## Architecture

Node.js + Hono.js. Multi-tenant (X-Client-ID). Reuses marketing-kit patterns.
Auth: WordPress cookie + nonce (fallback: WC API keys).

## Backups

Git tag: v1.0.0 | Archive: _archive/data-kit-v1.0.0-*.tar.gz
