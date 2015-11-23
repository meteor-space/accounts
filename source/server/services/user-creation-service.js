Space.Object.extend(Space.accounts, 'UserCreationService', {

  dependencies: {
    accounts: 'Accounts'
  },

  mixin: [
    Space.messaging.EventSubscribing,
    Space.messaging.EventPublishing
  ],

  statics: {
    handleUserCreation(options, user) {
      // Assign guids as user ids
      user._id = new Guid().toString();
      return user;
    }
  },

  onExtending() {
    Accounts.onCreateUser(_.bind(this.handleUserCreation, this));
  },

  eventSubscriptions() {
    return [{
      'Space.accounts.SignupInitiated': this._createMeteorUser,
      'Space.accounts.SignupRetried': this._createMeteorUser
    }];
  },

  _createMeteorUser(event) {
    let userData = {
      password: {
        digest: event.password.toString(),
        algorithm: "sha-256"
      }
    };
    if (event.username) userData.username = event.username.toString();
    if (event.email) userData.email = event.email.toString();
    let meta = { signupId: event.sourceId };
    try {
      this.accounts.createUser(userData);
      this.publish(new Space.accounts.UserCreated({
        userId: event.userId,
        meta: meta
      }));
    } catch (error) {
      this.publish(new Space.accounts.UserCreationFailed({
        userId: event.userId,
        error: error.message,
        meta: meta
      }));
    }
  }

});
