---
title: Getting Started
---

Getting started with RethinkID is quick and easy. To being, you create a RethinkID account, then create a RethinkID App. Next, you install the JavaScript SDK, configure an instance of the SDK, then create and log in a user before interacting with data.

## Create a RethinkID Account

To begin, [create a RethinkID account](https://id.rethinkdb.cloud/login).

## Create a RethinkID App

On your RethinkID dashboard go to the Developers section by clicking [**Developers**](https://id.rethinkdb.cloud/developers).

Next, click **Create App**.

- Give your app a name.
- Add your app's URL.
- Add one or more redirect URIs.

## Install the JavaScript SDK

Install the SDK from NPM:

```bash
npm i @rethinkid/rethinkid-js-sdk
```

Or, load it from a CDN:

```html
<script src="https://unpkg.com/@rethinkid/rethinkid-js-sdk"></script>
```

## Create a SDK Client

```js
const rethinkId = new RethinkID({
  appId: "<example-app-id>",
  loginRedirectUri: "http://example.com",
});
```

## Create or Log in a User

```js
// Add as a button click handler
rid.login()
```

Check if user is logged in:

```js
rid.isLoggedIn()
```

Handle a successful log in:

```js
rid.onLogin(() => {
  // Handle user log in
});
```

## Create a Collection

```js
const tasksCollection = rid.collection("tasks");
```

## Insert a Doc

```js
const task = { name: "Make dream apps with RethinkID" };
tasksCollection.insertOne({ task });
```

## Fetch all Docs

```js
tasksCollection.getAll() // returns a Promise
```