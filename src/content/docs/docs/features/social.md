---
title: Social
---

Bazaar comes with built-in social features. It allows you to find user and add users to your contacts for easy lookup. You can also request a connection to another user. An accepted connection will then give you access to non-public information such as their email address.

## Get a User

```js
// Get logged in user
bzr.social.getUser();

// Get user by ID
bzr.social.getUser({ userId: "example-user-id" });

// Get user by handle
bzr.social.getUser({ handle: "example-handle" });
```

You generally get public user information when querying a user except for your own (logged in) user and connected users.

```ts
type User = {
  id: string;
  name: string;
  handle: string;
  email: string | undefined; // private
};
```

## List Contacts

List the contacts of the logged in user:

```js
bzr.social.contacts.list();
```

A contact looks as follows:

```ts
type Contact = {
  id: string;
  /**
   * Flag to signal if contact is connected (you are trusted by this contact)
   */
  connected: boolean;
  user: User;
};
```

## Subscribe to Contacts

Subscribe to change events for contacts of the logged in user:

```js
bzr.social.contacts.subscribe(listener);
```

See more details about the [`listener`](../collections/#subscribe-to-collection-change-events) object.

## Find Users and Manage Contacts

Finding a user or managing contacts can be done via a modal:

```js
bzr.social.openModal();
```

You can also open a modal and pass a callback to do something with the user ID selected in the modal:

```js
bzr.social.openModal((userId) => {
  // do something with userId, e.g., create a permission
});
```

:::note
Finding users and managing contacts can also be done from your [Bazaar Dashboard](https://cloud.bzr.dev/)
:::
