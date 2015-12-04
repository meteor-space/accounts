
// Define or override existing signup command
Space.messaging.Command.extend(Space.accounts, 'SignupUser', {
  onExtending() {
    this.type('Space.accounts.SignupUser');
  }
});

Space.accounts.configureCommands = function(configuration) {
  let signupUserCommandConfig = configuration.accounts.signupUserCommand;
  Space.accounts.SignupUser.fields = _.extend(signupUserCommandConfig, {
    targetId: Guid // Meteor.user GUID
  });
};
