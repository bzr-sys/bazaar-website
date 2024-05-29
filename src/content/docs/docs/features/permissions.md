---
title: Permissions
---

Bazaar permissions allow you to share content such as a shopping list and create social functionality like chatting with another user.

### Create a Permission

Create, or grant, a new permission, i.e. share a resource.

```js
import { PermissionType } from "@bzr/bazaar";
const newPermission = {
  collectionName: "example-collection-name",
  userId: "example-user-id-to-grant-permission-to",
  types: [PermissionType.READ],
  filter: {
    id: "example-doc-id",
  },
};

bzr.permissions.create(newPermission);
```

The permission type can be `PermissionType.READ`, `PermissionType.INSERT`, `PermissionType.UPDATE`, and `PermissionType.DELETE`.

Setting userId to `*` will grant this permission to any user. This allows you to create documents that are accessible to anybody or have the document itself dictate who has permission. For example, the permission

```js
const audiencePermission = {
  collectionName: "messages",
  userId: "*",
  types: [PermissionType.READ],
  filter: {
    audience: {
      $contains: $user,
    },
  },
};
```

will give any user access to a document, given the user ID is present in the audience array.

:::note
`$user` is a reserved value that can be used in permission [filters](/docs/features/collections) and will resolve to the calling user's ID.
:::

#### Notify target user

When a personal permission, i.e., a permission with a set `userId` is created, the target user may be notified something was shared with them. This is done via a sharing notification argument in the `create` function:

```js
bzr.permissions.create(newPermission, notification);
```

The notification has the following type:

```ts
export type SharingNotification = {
  createNotification: boolean; // Defaults to false
  sendMessage: SendNotification; // Defaults to NEVER
  /**
   * Defaults to "X shared something with you in app Y"
   */
  message?: string; // max 250 characters
};
```

The `createNotification` flag specifies if a notification on the target user's Bazaar dashboard will be created.

The `sendMessage` field defines under what circumstances an email will be sent to the target user. The options are `SendNotification.NEVER`, `SendNotification.ALWAYS`, and `SendNotification.INVITE_ONLY` which only sends an email if the target user does not use the app the permission is for (it is an indirect invitation or nudge to use the app).

### List Permissions

List all permissions created by a user:

```js
// List all permissions created by a user
bzr.permissions.list();

// Specify options to filter permissions a user created
bzr.permissions.list({
  collectionName: "example-collection-name",
  userId: "granted-user-id",
  type: PermissionType.READ,
});
```

### Delete a Permission

Delete a permission a user has created:

```js
bzr.permissions.delete("example-permission-id");
```

## Sharing Links

A sharing link allows a user to share a URL to give a specified permission. For example, you can create a link that gives the user that clicks on the link access to your private blog.

A sharing link object looks as follows:

```ts
type Link = {
  id: string;
  permission: PermissionTemplate;
  limit: number;
  description: string; // max 30 characters
  users: string[]; // list of users that redeemed the link
  url: string;
};
```

### Create a Link

Create a link to share a resource:

```js
const permissionTemplate = {
  collectionName: "example-collection-name",
  // Grant access to all permission types
  types: [
    PermissionType.READ,
    PermissionType.INSERT,
    PermissionType.UPDATE,
    PermissionType.DELETE,
  ],
  // Specify an optional filter
  filter: {
    id: "example-doc-id",
  },
};

const link = await bzr.permissions.links.create(permissionTemplate);
const url = link.url; // Share this URL with the user you want
```

#### Creating link options

When creating a link you can also specify a description and a limit:

```js
const link = await bzr.permissions.links.create(
  permissionTemplate,
  description,
  limit,
);
```

The description is a max 30 character long string to help users remember the purpose of the created link. The limit specifies how many times the link may be redeemed. The default is `1`. Setting it to `0` allows the link to be redeemed unlimited times.

### List Links

List all of a user's links:

```js
bzr.permissions.links.list({
  collectionName: "example-collection-name",
  type: "insert",
});
```

### Subscribe to Share Link Events

To react to redeemed links, you can subscribe to link change events

```js
const options = { collectionName: "example-collection-name", type: "insert" };
bzr.permissions.links.subscribe(options, {
  onChange: (oldLink, newLink) => {
    // compare oldLink.users and newLink.users to see who redeemed the link
  },
});
```

See more details about the [`listener`](../collections/#subscribe-to-collection-change-events) object.

### Delete a Link

Delete a sharing link:

```js
bzr.permissions.links.delete("example-link-id");
```

## Permissions Granted to a User

When a personal permission is created, a granted permission object is created for the target user:

```ts
type GrantedPermission = {
  id: string;
  /**
   * ID of the resource owner (the user that created the permission)
   */
  ownerId: string;
  permission: Permission;
};
```

### List Granted Permissions

List permissions that have been granted to the authenticated user in the current app:

```js
// List all permissions granted to a user
bzr.permissions.granted.list();

// Specify options to filter permissions granted to a user
bzr.permissions.granted.list({
  collectionName: "example-collection-name",
  ownerId: "example-owner-id",
  type: PermissionType.READ,
});
```

### Subscribe to Granted Permission Events

Subscribe to change event for permissions granted to a user:

```js
const subscribeOptions = {};
bzr.permissions.granted.subscribe(options, listener);
```

See more details about the [`listener`](../collections/#subscribe-to-collection-change-events) object.

### Delete a Granted Permission

Delete a permission that was granted to the authenticated user:

```js
bzr.permissions.granted.delete("example-granted-permission-id");
```

:::note
This only deletes the granted permission object, it does not actually remove the permission the granting user created.
:::
