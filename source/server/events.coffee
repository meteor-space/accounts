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
    registrationId: Guid,
    userId: Guid
  }

  UserCreationFailed: {
    registrationId: Guid,
    userId: Guid
    error: String
  }

  AccountCreated: {
    registrationId: Guid
    userId: Guid
    username: Match.OneOf(Username, null)
    email: Match.OneOf(EmailAddress, null)
    password: Password
  }

  AccountLoggedIn: {
    via: String
  }

  AccountLoginFailed: {
    via: String
    error: String
  }
