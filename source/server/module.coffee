class Space.accounts extends Space.Module

  @publish this, 'Space.accounts'

  RequiredModules: ['Space.eventSourcing']

  Singletons: [
    'Space.accounts.UsersRouter'
  ]
