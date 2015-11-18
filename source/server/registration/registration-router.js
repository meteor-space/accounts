Space.eventSourcing.Router.extend(Space.accounts, 'RegistrationsRouter', {

  aggregate: Space.accounts.Registration,
  initializingCommand: Space.accounts.Register,

  routeEvents: [
    Space.accounts.UserCreated,
    Space.accounts.UserCreationFailed,
    Space.accounts.AccountCreated
  ],

  eventCorrelationProperty: 'registrationId'

});
