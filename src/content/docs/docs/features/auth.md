---
title: Auth
---

RethinkID Auth documentation.

Create a new user or Log in:

```js
// Add as a button click handler
rid.login()
```

Log out a user:

```js
// Add as a button click handler
rid.logOut()
```

Check if user is logged in:

```js
rid.isLoggedIn()
```

Handle a successful log in:

```js
rid.onLogin(() => {
  // Handle user log in
});
```

Handle a log in error:

```js
rid.onLoginError(() => {
  // Handle log in error
});
```
