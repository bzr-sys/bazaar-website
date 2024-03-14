---
title: Getting Started
---

Getting started with Bazaar is quick and easy. To being, you create a Bazaar account, then create a Bazaar Project and register your app. Next, you install the JavaScript SDK, configure an instance of the SDK, then create and log in a user before interacting with data.

## Create a Bazaar Account

To begin, [create a Bazaar account](https://cloud.bzr.dev/login).

## Create a Bazaar Project

On your Bazaar dashboard go to the Developers section by clicking [**Developers**](https://cloud.bzr.dev/developers).

Next, click **Create Project**.

- Give your app a name.
- Add your app's URL.
- Add one or more redirect URIs.

## Install the JavaScript SDK

Install the SDK from NPM:

```bash
npm i @bzr/bazaar
```

Or, load it from a CDN:

```html
<script src="https://unpkg.com/@bzr/bazaar"></script>
```

## Create an SDK Client

```js
const bzr = new Bazaar({
  appId: "example-app-id",
  loginRedirectUri: "http://example.com",
});
```

## Create or Log in a User

```js
// Add as a button click handler
bzr.login();
```

Check if user is logged in:

```js
bzr.isLoggedIn();
```

Handle a successful log in:

```js
bzr.onLogin(() => {
  // Handle user log in
});
```

## Create a Collection

```js
const tasksCollection = bzr.collection("tasks");
```

## Insert a Doc

```js
const task = { name: "Make dream apps with Bazaar" };
tasksCollection.insertOne({ task });
```

## Fetch all Docs

```js
tasksCollection.getAll(); // returns a Promise
```

Learn about the full capabilities of [realtime databases](/docs/features/realtime-databases).
