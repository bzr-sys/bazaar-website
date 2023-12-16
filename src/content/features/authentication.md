---
title: Authentication
summary: Clouded streamlines app authentication with an easy-to-integrate login() method and secure OAuth flow, offering seamless user authorization and token management for enhanced security and developer convenience.
order: 4
---

Clouded simplifies the authentication process for app developers with a secure and user-friendly approach. Our SDK's login() method, easily integrated into any part of your application, initiates a straightforward authentication flow. By attaching this method to a button click, users are presented with a pop-up directing them to Clouded's OAuth page. New users can quickly create a Clouded account, while existing users are prompted to authorize the app, streamlining the login process for all parties.

Our robust system follows the OAuth Code Exchange flow with PKCE, ensuring high security standards. Once the user authorizes the app, our SDK seamlessly handles the exchange of the auth code for a JWT access token. This token is then used to authenticate backend requests, integrating effortlessly with Clouded's database services.

By choosing Clouded, developers can eliminate the complexity and security concerns of implementing authentication, allowing them to focus on creating exceptional user experiences.

///

SDK stores access tokens in local storage automatically and adds the token when making a Socket.IO connection. No need to manually store access tokens and pass with each request.