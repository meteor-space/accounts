class Space.accounts.UsersRouter extends Space.eventSourcing.Router

  Aggregate: Space.accounts.User
  InitializingCommand: Space.accounts.CreateUser

  RouteCommands: [
    Space.accounts.RegisterSuccessfulLogin
    Space.accounts.RegisterFailedLogin
  ]
