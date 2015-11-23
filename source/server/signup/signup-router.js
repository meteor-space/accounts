Space.eventSourcing.ProcessRouter.extend(Space.accounts, 'SignupRouter', {

  process: Space.accounts.Signup,
  initializingMessage: Space.accounts.InitiateSignup,

  routeEvents: [
    Space.accounts.UserCreated,
    Space.accounts.UserCreationFailed
  ],

  routeCommands: [
    Space.accounts.RetrySignup
  ]

});
