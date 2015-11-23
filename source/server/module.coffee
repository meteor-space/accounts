class Space.accounts extends Space.Module

  @publish this, 'Space.accounts'

  requiredModules: ['Space.eventSourcing']

  singletons: [
    'Space.accounts.SignupRouter'
    'Space.accounts.UserCreationService'
    'Space.accounts.LoginService'
  ]
