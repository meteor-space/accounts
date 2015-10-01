Space.messaging.define Space.messaging.Event, 'Space.accounts',

  UserCreated: {
    sourceId: Guid
    timestamp: Date
    username: Username
    email: EmailAddress
    password: Password
  }

  UserLoggedIn: {
    sourceId: Guid
    timestamp: Date
    via: String
  }

  UserLoginFailed: {
    sourceId: Guid
    timestamp: Date
    via: String
    error: String
  }
