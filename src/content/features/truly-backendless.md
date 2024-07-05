---
title: Truly Backendless
summary: Setting up your Bazaar app is as simple as any Identity Provider. Traditional backendless solutions like Firebase and Supabase, require you to configure the backend's data access policy. In contrast, Bazaar's novel way of scoping data to a user makes any configuration obsolete.
order: 2
---

In recent years, Backend-as-a-service providers such as Firebase and Supabase have become popular. One of their main innovation was to allow direct access to the database from the frontend. This makes the development of apps feel backend-less, as all logic to access data resides in the frontend. However, since all users using the app share the same database, the developer has to set access policies in order to determine which user can access what data. With Bazaar, the backend database is not only scoped to the app, but also to the user. This makes data access policies obsolete.

## Benefits for Developers

- **Simplicity:** Create and deploy an app without any backend config. The only configuration you require is for the identity provider.
- **Portability:** Never worry about any backend config. All your code is self-contained in the frontend/app. It can live anywhere and will just work.
