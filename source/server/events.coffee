Space.messaging.define Space.messaging.Event, 'Space.accounts',

  UserCreated: {
    sourceId: Guid
    username: String
    email: String # TODO: Update to Email VO
    password: String
  }

  UserLoggedIn: {
    sourceId: Guid
  }
