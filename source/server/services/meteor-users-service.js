Space.Object.extend(Space.accounts, 'MeteorUsersService', {

  dependencies: {
    accounts: 'Accounts',
    usersCollection: 'Meteor.users'
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
      userId: event.sourceId,
      password: {
        digest: event.password.toString(),
        algorithm: "sha-256"
      }
    };
    if (event.username) userData.username = event.username.toString();
    if (event.email) userData.email = event.email.toString();
    try {
      this.accounts.createUser(userData);
    } catch (error) {
      this.publish(new Space.accounts.UserCreationFailed({
        registrationId: event.sourceId,
        userId: event.sourceId,
        error: error.message
      }));
    }
    this.publish(new Space.accounts.UserCreated({
      registrationId: event.sourceId,
      userId: event.sourceId
    }));
  }

});
