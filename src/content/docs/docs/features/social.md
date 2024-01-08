---
title: Social
---

Get started with RethinkID Social.

## Open the Social Modal

Open modal:

```js
rid.social.openModal()
```

Open model and pass a callback to do something with the user ID selected in the modal:

```js
rid.social.openModal((userId) => {
  // do something with userId
});
```

## Get a User

```js
// Get logged in user
rid.social.getUser()

// Get user by ID
rid.social.getUser("example-user-id")
```

## List Contacts

List the contacts of the logged in user:

```js
rid.social.contacts.list()
```

## Subscribe to Contacts Events

Subscribe to change events for contacts of the logged in user:

```js
rid.social.contacts.subscribe(({ newDoc, oldDoc }) => {
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
