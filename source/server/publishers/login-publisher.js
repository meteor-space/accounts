Space.Object.extend(Space.accounts, 'LoginPublisher', {

  mixin: [
    Space.messaging.EventPublishing
  ],

  dependencies: {
    accounts: 'Accounts'
  },

  onDependenciesReady() {
    this.accounts.onLogin((login) => {
      if (login.user) {
        this.publish(new Space.accounts.LoginSuccessful({
          userId: new Guid(login.user._id),
          type: login.type
        }));
      }
    });
    this.accounts.onLoginFailure((login) => {
      if (login.user) {
        this.publish(new Space.accounts.LoginFailed({
          userId: new Guid(login.user._id),
          error: login.error,
          type: login.type
        }));
      }
    });
  }

});
