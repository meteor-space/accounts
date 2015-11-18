Space.messaging.define Space.messaging.Event, 'Space.accounts',

  UserCreated: {
    username: Match.OneOf(Username, null)
    email: Match.OneOf(EmailAddress, null)
    password: Password
  }

  UserLoggedIn: {
    via: String
  }

  UserLoginFailed: {
    via: String
    error: String
  }
