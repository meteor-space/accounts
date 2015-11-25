Space.Object.extend(Space.accounts, 'AuthenticationPublisher', {

  mixin: [
    Space.messaging.EventPublishing
  ],

  dependencies: {
    accounts: 'Accounts'
  },

  onDependenciesReady() {
    this.accounts.onLogin(_.bind(this.handleSuccessfulLogin, this));
    this.accounts.onLoginFailure(_.bind(this.handleFailedLogin, this));
  },

  handleFailedLogin(login) {
    if (login.user) {
      this.publish(new Space.accounts.UserLoginFailed({
        userId: new Guid(login.user._id),
        type: login.type,
        error: login.error.reason
      }));
    }
  },

  handleSuccessfulLogin(login) {
    this.publish(new Space.accounts.UserLoggedIn({
      userId: new Guid(login.user._id),
      type: login.type
    }));
  }
});
