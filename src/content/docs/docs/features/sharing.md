---
title: Sharing
---

RethinkID Sharing documentation.

## Open the Sharing Modal

Open the sharing modal with your desired permission template:

```ts
const permissionTemplate = {
  collectionName: "example-collection-name",
  // Grant access to all permission types
  types: ["read", "insert", "update", "delete"],
  // Specify an optional filter
  filter: {
    id: "example-doc-id",
  },
};

rid.permissions.openModal(permissionTemplate);
```

## Permissions

### List Permissions

List permission granted by a user:

```js
// List all permissions granted by a user
rid.permissions.list()

// Specify options to filter permissions a user granted
rid.permissions.list({
  collectionName: "example-collection-name",
  userId: "example-owner-id",
  type: ["read"]
})
```

### Create a Permission

Create, or grant, a new permission, i.e. share a resource.

```js
const newPermission = {
  collectionName: "example-collection-name",
  userId: "example-user-id-to-grant-permission-to",
  types: ["read"],
  filter: {
    id: "example-doc-id",
  },
};

rid.permissions.create(newPermission);
```

### Delete a Permission

Delete a permission a user has granted:

```js
rid.permissions.delete("example-permission-id")
```

## Share Links

### List Share Links

List all of a user's share links:

```js
rid.permissions.links.list({ collectionName: "example-collection-name", type: "insert"})
```

### Create a Share Link

Create a link to share a resource:

```js
const permissionTemplate = {
  collectionName: "example-collection-name",
  // Grant access to all permission types
  types: ["read", "insert", "update", "delete"],
  // Specify an optional filter
  filter: {
    id: "example-doc-id",
  },
};

rid.permissions.links.create(permissionTemplate)
```

### Delete a Share Link

Delete a share link:

```js
rid.permissions.links.delete("example-link-id")
```

### Subscribe to Share Link Events

```js
const options = { collectionName: "example-collection-name", type: "insert"};
rid.permissions.links.subscribe(options, ({ oldDoc, newDoc }) => {
  if (!oldDoc && newDoc) {
    // Handle link added
  }
  if (oldDoc && newDoc) {
    // Handle link updated
  }
  if (oldDoc && !newDoc) {
    // Handle link deleted
  }
});
```

## Permissions Granted to a User

### List Granted Permissions

List permissions that have been granted to the authenticated user:

```js
// List all permissions granted to a user
rid.permissions.granted.list()

// Specify options to filter permissions granted to a user
rid.permissions.granted.list({
  collectionName: "example-collection-name",
  ownerId: "example-owner-id",
  type: ["read"]
})
```

### Delete a Granted Permission

Delete a permission that was granted to the authenticated user:

```js
rid.permissions.granted.delete("example-granted-permission-id")
```

### Subscribe to Granted Permission Events

Subscribe to change event for permissions granted to a user:

```js
const subscribeOptions = {}
rid.permissions.granted.subscribe(subscribeOptions, { oldDoc, newDoc } => {
  if (oldDoc === null && newDoc) {
    // Handle granted permission added.
  }
  if (oldDoc && newDoc === null) {
    // Handle granted permission removed.
  }
});
```
