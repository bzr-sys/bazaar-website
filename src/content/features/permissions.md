---
title: Permissions
summary: Bazaar permissions offers powerful features for realtime collaboration, allowing precise control over database access and the ability to react to changes in shared content.
order: 7
---

TODO update.

Bazaar comes with a powerful permissions API, empowering developers to implement sharing and collaboration in their applications.

With the database-per-user architecture, users can interact with their data by default. The Permissions API facilitates granting access to other users. Permissions can be granted to docs and collections with filters to deliver precise control.

Share a document with a user with read permissions:

```ts
const newPermission = {
  collectionName: "example-collection-name",
  userId: "example-user-id",
  types: ["read"],
  filter: {
    id: "example-doc-id",
  },
};
const { id } = await bzr.permissions.create(newPermission);
```

The Permissions API is simple to use but caters to complex scenarios. Subscribe to change events to react to granted permissions changes in realtime.

Subscribe to change events for a granted permission for a collection:

```ts
bzr.permissions.granted.subscribe(
  { collectionName: "example-collection-name" },
  async ({ oldDoc, newDoc }) => {
    if (oldDoc === null && newDoc) {
      // Granted permission added
    }
    if (oldDoc && newDoc === null) {
      // Granted permission removed 
    }
  }
);
```

Create share links and similarly subscribe to receive change events when a link is created, updated, deleted, or redeemed in realtime.

Create a share link for a doc will all permissions:

```ts
const permissionTemplate = {
  collectionName: "example-collection-name",
  types: ["read", "insert", "update", "delete"],
  filter: {
    id: "example-doc-id",
  },
};

const { url } = await bzr.permissions.links.create(permissionTemplate);
```

Sharing can also be managed through a Bazaar modal:

```ts
const permissionTemplate = {
  collectionName: "example-collection-name",
  types: ["read", "insert", "update", "delete"],
  filter: {
    id: "example-doc-id",
  },
};

bzr.permissions.openModal(permissionTemplate);
```

TODO screenshot modal.