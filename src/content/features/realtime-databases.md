---
title: Realtime Databases
summary: Clouded’s document-orientated per-user database architecture streamlines development and enhances data privacy, featuring an intuitive SDK for efficient realtime operations.
order: 3
---

Clouded employs a database architecture where each end-user is assigned an individual database for every application. This approach allows end-users manage authorization, and handle their app-specific data including viewing, exporting, or deleting, thereby supporting better data privacy and ownership practices.

Database access is facilitated through an intuitive data API, designed for ease of use and efficiency in real-time operations.

One of the advantages of the per-user-per-app database model is simplified access management. It eliminates the need for configuring access policies, as users have automatic access to their databases.

Databases are document-orientated, with no need to create or enforce schemas. Database collections are lazily created, further reducing setup time and enabling 
you to get your apps operational in less time.

Granting access to an end-user's data can be done conveniently with the Permissions API.

## TODO

- Show sample code snippets:
  - Show reading own data, maybe with login, or is logged in. Maybe inserting two different objects into the same collection
  - Show lazy collection creation, maybe with optional `onCreate` callback
  - Show manual collection creation
- Show user data management dashboard screenshot
- Show architecture diagram
