
Space.messaging.define Space.messaging.Command, 'Space.accounts',

  Register: {
    targetId: Guid # for Space.accounts.Registration
    accountId: Guid
    userId: Guid
    username: Match.OneOf(Username, null)
    email: Match.OneOf(EmailAddress, null)
    password: Password
  }

  CreateAccount: {
    targetId: Guid # for Space.accounts.Account
    registrationId: Match.Optional(Guid)
    userId: Guid
    username: Match.OneOf(Username, null)
    email: Match.OneOf(EmailAddress, null)
    password: Password
  }

  RegisterSuccessfulLogin: {
    targetId: Guid # for Space.accounts.Account
    type: String
  }

  RegisterFailedLogin: {
    targetId: Guid # for Space.accounts.Account
    type: String
    error: String
  }
