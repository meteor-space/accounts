Space.messaging.define Space.messaging.Event, 'Space.accounts',

  RegistrationInitiated: {
    accountId: Guid
    userId: Guid
    username: Match.OneOf(Username, null)
    email: Match.OneOf(EmailAddress, null)
    password: Password
  }

  RegistrationFailed: {
    error: String
  }

  RegistrationCompleted: {}

  UserRegistered: {
    userId: Guid
  }

  UserCreated: {
    userId: Guid
  }

  UserCreationFailed: {
    userId: Guid
    error: String
  }

  AccountCreated: {
    registrationId: Match.Optional(Guid)
    userId: Guid
    username: Match.OneOf(Username, null)
    email: Match.OneOf(EmailAddress, null)
    password: Password
  }

  AccountLoggedIn: {
    loginService: String
  }

  AccountLoginFailed: {
    loginService: String
    error: String
  }
