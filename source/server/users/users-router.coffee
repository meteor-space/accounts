class Space.accounts.UsersRouter extends Space.eventSourcing.AggregateRouter

  aggregate: Space.accounts.User
  initializingCommand: Space.accounts.CreateUser

  routeCommands: [
    Space.accounts.RegisterSuccessfulLogin
    Space.accounts.RegisterFailedLogin
  ]
