---
title: Social
---

Get started with Bazaar Social.

## Open the Social Modal

Open modal:

```js
bzr.social.openModal()
```

Open model and pass a callback to do something with the user ID selected in the modal:

```js
bzr.social.openModal((userId) => {
  // do something with userId
});
```

## Get a User

```js
// Get logged in user
bzr.social.getUser()

// Get user by ID
bzr.social.getUser("example-user-id")
```

## List Contacts

List the contacts of the logged in user:

```js
bzr.social.contacts.list()
```

## Subscribe to Contacts Events

Subscribe to change events for contacts of the logged in user:

```js
bzr.social.contacts.subscribe(({ newDoc, oldDoc }) => {
  if (newDoc && !oldDoc) {
    // Contact added
  }
  if (newDoc && oldDoc) {
    // Contact updated
  }
  if (!newDoc && oldDoc) {
    // Contact deleted
  }
});
```
