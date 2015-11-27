Space.accounts = Space.Module.define('Space.accounts', {

  requiredModules: ['Space.messaging'],

  configuration: {
    accounts: {
      // Meteor default 'EMAIL_ONLY'
      signupUserCommand: {
        email: EmailAddress,
        password: Password
      }
    }
  },

  singletons: [
    'Space.accounts.UserCreationService',
    'Space.accounts.LoginPublisher'
  ],

  onInitialize() {
    Space.accounts.configureCommands(this.configuration);
  }

});
