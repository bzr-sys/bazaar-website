---
title: Local Development
---

To test your Bazaar app locally, install and run the mock server on your machine:

```bash
npm i -D @bzr/bazaar-mock
npx bzr
```

This will launch a mock Bazaar server on port 3377. It will also create an app with ID "test" that is expected to run on 'http://localhost:8080'.

You can change these defaults with the following options.

```
npx bzr [options]
  -i specify app ID. It is optional and defaults to 'test'.
  -u specify app URL. It is optional and defaults to 'http://localhost:8080'.
  -r specify redirect URI. Can be specified multiple times. It is optional and defaults to 'http://localhost:8080'.
  -p specify port. Default is 3377.
  -h show this help
```

The mock server is close in functionality with the real server. You can log in on http://localhost:3377 with any email and code 1234. This gives you access to your mock Bazaar dashboard and you can also add more apps. All data is stored in memory and only exists as long as the mock server is running.

## Connect your app to the mock server

Whenever you run your app with `NODE_ENV=development`, the Bazaar library will automatically connect to "http://localhost:3377". You can also change this URL manually when creating a BazaarApp.

```js
import { BazaarApp } from "@bzr/bazaar";

const bzr = new BazaarApp({
  appId: "test",
  loginRedirectUri: window.location.origin + window.location.pathname,
  bazaarUri: "http://localhost:3377",
});
```
