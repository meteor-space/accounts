Space.messaging.define Space.messaging.Event, 'Space.accounts',

  UserCreated: {
    username: Username
    email: EmailAddress
    password: Password
  }

  UserLoggedIn: {
    via: String
  }

  UserLoginFailed: {
    via: String
    error: String
  }
