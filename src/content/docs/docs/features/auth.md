---
title: Auth
---

RethinkID Auth documentation.

## Sign up and Log in

Create a new user or Log in:

```js
// Add as a button click handler
rid.login()
```

## Log Out

Log out a user:

```js
// Add as a button click handler
rid.logOut()
```

## Check if a User is Logged In

Check if user is logged in:

```js
rid.isLoggedIn()
```

## On Log In Handler

Handle a successful log in:

```js
rid.onLogin(() => {
  // Handle user log in
});
```

## On Log In Error Handler

Handle a log in error:

```js
rid.onLoginError(() => {
  // Handle log in error
});
```
