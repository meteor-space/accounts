Space.accounts ?= {} # Create the namespace on the client

Space.messaging.define Space.messaging.Command, 'Space.accounts',

  CreateUser: {
    targetId: Guid
    username: Username
    email: EmailAddress # TODO: Update to Email VO
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
