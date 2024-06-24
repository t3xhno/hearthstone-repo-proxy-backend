# Proxy Backend

This serves as the proxy backend for [this repo](https://github.com/t3xhno/hearthstone-repo).

Initially, I didn't know the lack of the 3rd party API `Access-Control-Allow-Origin` header was going to force me into making a proxy server to consume it.

## Instructions

Really simple one. The API address is hardcoded, only has a few endpoints to mirror a subset of the 3rd party API, and is simply run by a single npm script:

```bash
npm run dev
```
