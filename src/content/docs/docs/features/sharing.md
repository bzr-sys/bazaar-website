---
title: Sharing
---

RethinkID Sharing documentation.

Open the sharing modal:

```ts
const permissionTemplate = {
  collectionName: "example-collection-name",
  types: ["read", "insert", "update", "delete"],
  filter: {
    id: "example-doc-id",
  },
};

rid.permissions.openModal(permissionTemplate);
```

```js
rid.permissions.granted.list()
```

```js
rid.permissions.granted.delete()
```

```js
rid.permissions.granted.subscribe()
```

```js
rid.permissions.create()
```

```js
rid.permissions.delete()
```

```js
rid.permissions.list()
```

```js
rid.permissions.links.create()
```

```js
rid.permissions.links.list()
```

```js
rid.permissions.links.delete()
```

```js
rid.permissions.links.subscribe()
```
