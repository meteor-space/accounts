Space.eventSourcing.ProcessRouter.extend(Space.accounts, 'RegistrationsRouter', {

  process: Space.accounts.Registration,
  initializingMessage: Space.accounts.Register,

  routeEvents: [
    Space.accounts.UserCreated,
    Space.accounts.UserCreationFailed,
    Space.accounts.AccountCreated
  ]

});
