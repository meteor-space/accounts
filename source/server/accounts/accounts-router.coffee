class Space.accounts.AccountsRouter extends Space.eventSourcing.Router

  aggregate: Space.accounts.Account
  initializingCommand: Space.accounts.CreateAccount

  routeCommands: []
