Space.messaging.define(Space.messaging.Event, 'Space.accounts', {

  UserCreated: {
    userId: Guid
  },

  UserCreationFailed: {
    userId: Guid,
    error: String
  }

});
