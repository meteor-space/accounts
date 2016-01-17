LoginType = Space.domain.ValueObject.extend('LoginType', {

  Constructor(loginTypeParam) {

    let loginType = undefined;

    // Allow to provide another instance of LoginType as param
    if (loginTypeParam instanceof Object) {
      loginType = loginTypeParam.loginType;
    } else {
      loginType = loginTypeParam;
    }

    if (!LoginType.isValid(loginType)) {
      throw new Error(LoginType.ERRORS.invalidloginType(loginType));
    }

    this.loginType = loginType;
    Object.freeze(this);

  },

  toString() {
    return this.loginType;
  },

  // EJSON serializable fields
  fields() {
    return {
      loginType: String
    };
  }

});

// Register as EJSON type
LoginType.type('LoginType');

LoginType.ERRORS = {
  invalidloginType(loginType) {
    return `Invalid loginType '${loginType}' given.`;
  }
};

LoginType.VALID_LOGIN_TYPES = [
  'google',
  'facebook',
  'email',
  'password'
];

LoginType.isValid = function(loginType) {
  return LoginType.VALID_LOGIN_TYPES.indexOf(loginType) > -1;
};
