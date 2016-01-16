describe('Space.accounts', function() {

  MyApp = Space.Application.define('MyApp', {
    requiredModules: ['Space.accounts']
  });

  describe("Initialization", function() {

    beforeEach(function() {
      this.myApp = new MyApp();
    });

    afterEach(function() {
      this.myApp.reset();
    });

    it("handles signup user command", function() {

      let signupCommand = new Space.accounts.SignupUser({
        targetId: new Guid(),
        email: new EmailAddress('my@email.com'),
        password: new Password('password')
      });

      this.myApp.commandBus.send(signupCommand);

    });

  });

});