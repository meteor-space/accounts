
Space.messaging.define Space.messaging.Command, 'Space.accounts',

  InitiateSignup: {
    targetId: Guid # for Space.accounts.Signup
    userId: Guid
    username: Match.OneOf(Username, null)
    email: Match.OneOf(EmailAddress, null)
    password: Match.OneOf(Password, null)
  }

  RetrySignup: {
    targetId: Guid # for Space.accounts.Signup
    username: Match.OneOf(Username, null)
    email: Match.OneOf(EmailAddress, null)
    password: Match.OneOf(Password, null)
  }
