Space.Object.extend('Space.accounts.UserCreationService', {

  dependencies: {
    accounts: 'Accounts'
  },

  mixin: [
    Space.messaging.CommandHandling,
    Space.messaging.EventPublishing
  ],

  statics: {
    handleUserCreation(options, user) {

      if (user.services !== undefined) {

        if (user.services.google !== undefined) {

          user.email = user.services.google.email;
          if (options.profile) {
            user.profile = options.profile;
          }
          user._id = new Guid().toString();

        } else if (user.services.facebook !== undefined) {

          if (user.services.facebook.email) {
            user.email = user.services.facebook.email;
          }
          if (options.profile) {
            user.profile = options.profile;
          }

        }

        user._id = new Guid().toString();

      } else {
        // Assign guids as user ids
        user._id = options.userId;
      }

      return user;
    }
  },

  onExtending() {
    Accounts.onCreateUser(_.bind(this.handleUserCreation, this));
  },

  commandHandlers() {
    return [{
      'Space.accounts.SignupUser': this._createMeteorUser
    }];
  },

  _createMeteorUser(command) {
    let userData = {
      userId: command.targetId.toString(),
      password: {
        digest: command.password.toString(),
        algorithm: "sha-256"
      }
    };
    if (command.username) userData.username = command.username.toString();
    if (command.email) userData.email = command.email.toString();
    let meta = command.meta || {};
    let error = null;
    try {
      this.accounts.createUser(userData);
    } catch (accountCreationError) {
      error = accountCreationError;
    }

    if (error) {
      this.publish(new Space.accounts.SignupFailed({
        userId: command.targetId,
        error: {
          code: error.error,
          message: error.reason
        },
        meta: meta
      }));
    } else {
      this.publish(new Space.accounts.SignupSuccessful({
        userId: command.targetId,
        meta: meta
      }));
    }
  }

});
