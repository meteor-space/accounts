Space.Object.extend(Space.accounts, 'UserCreationService', {

  dependencies: {
    accounts: 'Accounts'
  },

  mixin: [
    Space.messaging.CommandHandling,
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
      'Space.accounts.CreateUser': this._createMeteorUser
    }];
  },

  _createMeteorUser(command) {
    let userData = {
      password: {
        digest: command.password.toString(),
        algorithm: "sha-256"
      }
    };
    if (command.username) userData.username = command.username.toString();
    if (command.email) userData.email = command.email.toString();
    let meta = event.meta || {};
    try {
      this.accounts.createUser(userData);
      this.publish(new Space.accounts.UserCreated({
        userId: command.userId,
        meta: meta
      }));
    } catch (error) {
      this.publish(new Space.accounts.UserCreationFailed({
        userId: command.userId,
        error: error.message,
        meta: meta
      }));
    }
  }

});
