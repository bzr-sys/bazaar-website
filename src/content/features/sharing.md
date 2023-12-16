---
title: Sharing
summary: Clouded's Sharing feature set offers a robust permissions API for realtime collaboration, allowing precise control over database access and the ability to react to changes in shared content.
order: 5
---

Clouded includes a powerful permissions API, empowering developers to implement sharing and collaboration in their applications. With the database-per-user architecture, users can interact with their data by default. The Permissions API is used to grant access to others. This feature offers granular control over database collections and documents, enabling precise access rights management down to individual document levels.

The permissions API is simple to use but caters to complex sharing scenarios. This control extends to creating shareable links and subscribing to change events, allowing developers to track when a link is created, updated, deleted, or redeemed in realtime. Developers can subscribe to changes in permissions granted to an end-user.

## TODO

- Show diagram with permission granted to another user
- Show code snippet for permission, maybe