Space.Object.extend(Space.accounts, 'MeteorUsersService', {

  dependencies: {
    accounts: 'Accounts'
  },

  mixin: [
    Space.messaging.EventSubscribing,
    Space.messaging.EventPublishing
  ],

  statics: {
    handleUserCreation(options, user) {
      // The options come from the Meteor.createUser call -> assign the guid
      user._id = new Guid(options.userId).toString();
      return user;
    }
  },

  onExtending() {
    Accounts.onCreateUser(_.bind(this.handleUserCreation, this));
  },

  eventSubscriptions() {
    return [{
      'Space.accounts.RegistrationInitiated': this._createMeteorUser
    }];
  },

  _createMeteorUser(event) {
    let userData = {
      userId: event.userId,
      password: {
        digest: event.password.toString(),
        algorithm: "sha-256"
      }
    };
    if (event.username) userData.username = event.username.toString();
    if (event.email) userData.email = event.email.toString();
    let meta = _.extend(event.meta, { accountRegistrationId: event.sourceId });
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
