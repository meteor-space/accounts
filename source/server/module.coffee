class Space.accounts extends Space.Module

  @publish this, 'Space.accounts'

  requiredModules: ['Space.eventSourcing']

  singletons: [
    'Space.accounts.UsersRouter'
  ]
