Space.accounts ?= {} # Create the namespace on the client

Space.messaging.define Space.messaging.Command, 'Space.accounts',

  CreateUser: {
    targetId: Guid
    username: String
    email: String # TODO: Update to Email VO
    password: String
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
