Space.messaging.define Space.messaging.Command, 'Space.accounts',

  CreateUser: {
    targetId: String # Todo: Update to Guid
    username: String
    email: String # Todo: Update to Email
    password: String
  }
