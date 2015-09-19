Space.messaging.define Space.messaging.Event, 'Space.accounts',

  UserCreated: {
    sourceId: Guid
    timestamp: Date
    username: String
    email: String # TODO: Update to Email VO
    password: String
  }

  UserLoggedIn: {
    sourceId: Guid
    timestamp: Date
    via: String
  }
