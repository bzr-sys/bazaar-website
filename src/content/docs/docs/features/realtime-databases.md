---
title: Realtime Databases
---

Get started with the RethinkID Realtime Databases.

## Collections

```js
rid.collections.create()
```

```js
rid.collections.drop()
```

```js
rid.collections.list()
```

## Collection

The most convenient way to interact with a collection is to create a collections object:

```js
const collection = rid.collection("example-collection");
```

```js
collection.getAll()
```

```js
collection.getOne()
```

```js
collection.getPage()
```

```js
collection.insertOne()
```

```js
collection.updateOne()
```

```js
collection.replaceOne()
```

```js
collection.deleteAll()
```

```js
collection.deleteOne()
```

```js
collection.subscribeAll()
```

```js
collection.subscribeOne()
```

## Connection Callbacks

```js
rid.onApiConnect()
```

```js
rid.onApiConnectError()
```
