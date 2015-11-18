
Space.messaging.define Space.messaging.Command, 'Space.accounts',

  CreateUser: {
    targetId: Guid
    username: Match.OneOf(Username, null)
    email: Match.OneOf(EmailAddress, null)
    password: Password
  }

  RegisterSuccessfulLogin: {
    targetId: Guid
    type: String
  }

  RegisterFailedLogin: {
    targetId: Guid
    type: String
    error: String
  }
