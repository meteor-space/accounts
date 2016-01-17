describe('LoginType', function() {

  beforeEach(function() {
    this.google = new LoginType('google');
  });

  it('is serializable', function() {

    var copy = EJSON.parse(EJSON.stringify(this.google));
    expect(copy.equals(this.google)).to.be.true;
  });

  describe('construction', function() {

    it('takes a login type and assigns it', function() {
      expect(this.google.loginType).to.equal('google');
    });

    it('throws error if invalid login type is assigned', function() {
      expect(function() {
        new LoginType('XX');
      }).to.throw("Invalid loginType 'XX' given.");
    });

  });

  describe('equality', function() {

    it('compares itself to another login type instance', function() {
      let google = new LoginType('google');
      let facebook = new LoginType('facebook');
      expect(google.equals(google)).to.be.true;
      expect(google.equals(facebook)).to.be.false;
    });

    it('only accepts other instance of LoginType', function() {
      expect(this.google.equals('google')).to.be.false;
    });

  });

  describe('login type validation', function() {

    it('returns true for any valid login types', function() {
      for (var i = 0, len = LoginType.VALID_LOGIN_TYPES.length; i < len; i++) {
        var loginType = LoginType.VALID_LOGIN_TYPES[i];
        expect(LoginType.isValid(loginType)).to.be.true;
      }
    });

  });

  describe('login with service check', function() {

    it('returns false if not logging in with service', function() {
      expect(new LoginType('username').isService()).to.be.false;
      expect(new LoginType('email').isService()).to.be.false;
    });

    it('returns true if logging in with service', function() {
      expect(new LoginType('google').isService()).to.be.true;
      expect(new LoginType('facebook').isService()).to.be.true;
    });

  });

  describe('immutability', function() {

    it('freezes itself', function() {
      expect(Object.isFrozen(this.google)).to.be.true;
    });

  });
});
