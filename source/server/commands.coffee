
Space.messaging.define Space.messaging.Command, 'Space.accounts',

  CreateUser: {
    targetId: Guid
    username: Username
    email: EmailAddress
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
