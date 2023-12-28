---
title: NoSQL Realtime Databases
summary: Clouded's document-orientated per-user database architecture streamlines development and enhances data privacy, featuring an intuitive SDK for efficient realtime operations.
order: 3
---

Databases are document-orientated, with no need to create or enforce schemas. Database collections are lazily created, enabling you to get your apps up and running quicker.

## Simple SDK

Create a document:

```ts
const tasksCollection = rethinkid.collection("tasks");
const id = tasksCollection.insert({ id: 1, name: "Do laundry" });
```

Read a document:

```ts
const tasksCollection = rethinkid.collection("tasks");
const task = tasksCollection.getOne(1);
```

## Database-per-user Architecture

RethinkID employs a database architecture where each end-user is assigned
an individual database for your app through their RethinkID account. This
approach allows end-users manage their authorized apps, and handle their app-specific data including viewing, exporting, or deleting, through
their RethinkID dashboard, thereby supporting better data privacy and
ownership practices.

Screenshot of the RethinkID admin dashboard for end-users

The per-user-per-app database model provides simplified access management. It eliminates the need for configuring access policies, as users have automatic access to their databases.

Granting access to an another user's data can be done conveniently with the [Permissions API](/docs).
