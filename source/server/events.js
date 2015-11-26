Space.messaging.define(Space.messaging.Event, 'Space.accounts', {

  // SIGNUP

  SignupSuccessful: {
    userId: Guid
  },

  SignupFailed: {
    userId: Guid,
    error: Object
  },

  // LOGIN

  LoginSuccessful: {
    userId: Guid,
    type: String
  },

  LoginFailed: {
    userId: Guid,
    error: Object,
    type: String
  }

});
