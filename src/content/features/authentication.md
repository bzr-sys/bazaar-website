---
title: Authentication
summary: RethinkID enhances app authentication with a simple API and robust OAuth flow, ensuring secure authorization and efficient token management for improved security and developer experience.
order: 6
---

RethinkID Authentication offers a straightforward and secure solution right out of the box.

## RethinkID OAuth Process

RethinkID-powered apps require users to have a RethinkID account. Authentication is done via a user's account, where they authorize their chosen apps. The authentication flow takes place in a RethinkID pop-up. Users can then manage app authorization from their RethinkID Dashboard.

## Simple SDK

Create a sign-up or login request:

```ts
rid.login();
```

The `login` method opens a login pop-up window. A user first creates a RethinkID account (or logs in to their existing RethinkID account), then authorizes your app. After authorizing your app, the pop-up window closes, and the SDK stores an access token in local storage. The user is now logged in, and a connection to the Data API is made.

Verify user login status:

```ts
rid.isLoggedIn();
```

Customize your login flow by setting a callback:

```ts
rid.onLogin(async () => {
  // Custom login handling
});
```

Read the [Auth docs](/docs/features/auth).

## Simplified Sharing

Leveraging RethinkID's database-per-user architecture, users gain immediate access to their databases, bypassing the need for complex access policies. For more refined control, the [Sharing API](/features/sharing) allows assigning permissions with precision.

## Technical Backbone

Underneath, RethinkID Authentication utilizes the OAuth2 Authorization Code Flow with PKCE extension, ensuring enhanced security. After authorization, a JWT access token is issued. Our SDK simplifies the process, managing login requests, auth code exchanges for access tokens, token storage, and integration with users' [realtime database](/features/realtime-databases), creating a cohesive and secure user experience.
