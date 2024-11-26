---
title: NoSQL Realtime Databases
summary: Bazaar's document-orientated per-user database architecture streamlines development and enhances data privacy, featuring an intuitive SDK for efficient realtime operations.
order: 5
---

Bazaar realtime databases are document-orientated, with no need to create or enforce schemas. Database collections are lazily created, enabling you to get your apps up and running quicker.

### Simple SDK

Insert a doc:

```ts
const tasksCollection = bzr.collection("tasks");

const task = { name: "Make dream apps with Bazaar" };
tasksCollection.insertOne({ task });
```

Read a doc:

```ts
const task = await tasksCollection.getOne("task-id");
```

Read the [Collections docs](/docs/features/collections/).

### Database-per-user Architecture

Bazaar employs a database architecture where each user is assigned
an individual database for your app through their Bazaar account. This
approach allows users manage their authorized apps, and handle their app-specific data including viewing, exporting, or deleting, through their Bazaar dashboard, thereby supporting better data privacy and
ownership practices.

The per-user-per-app database model provides simplified access management. It eliminates the need for configuring access policies, as users have automatic access to their databases.

Granting access to an another user's data can be done conveniently with the [Permissions API](/features/permissions).
