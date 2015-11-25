Space.accounts = Space.Module.define('Space.accounts', {

  requiredModules: ['Space.messaging'],

  singletons: [
    'Space.accounts.UserCreationService',
    'Space.accounts.AuthenticationPublisher'
  ]

});
