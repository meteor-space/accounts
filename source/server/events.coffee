Space.messaging.define Space.messaging.Event, 'Space.accounts',

  # ======= REGISTRATION ========

  SignupInitiated: {
    userId: Guid
    username: Match.OneOf(Username, null)
    email: Match.OneOf(EmailAddress, null)
    password: Match.OneOf(Password, null)
  }

  SignupRetried: {
    userId: Guid
    username: Match.OneOf(Username, null)
    email: Match.OneOf(EmailAddress, null)
    password: Match.OneOf(Password, null)
  }

  UserCreated: {
    userId: Guid
  }

  UserCreationFailed: {
    userId: Guid
    error: String
  }

  SignupFailed: {
    error: String
  }

  SignupCompleted: {}

  # ======= LOGIN / LOGOUT ========

  UserLoggedIn: {
    userId: String
    loginService: String
  }

  UserLoginFailed: {
    userId: String
    loginService: String
    error: String
  }
