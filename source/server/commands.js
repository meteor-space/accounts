
// Define or override existing signup command
Space.domain.Command.extend('Space.accounts.SignupUser', {

});

Space.accounts.configureCommands = function(configuration) {
  let signupUserCommandConfig = configuration.accounts.signupUserCommand;
  Space.accounts.SignupUser.fields = _.extend(signupUserCommandConfig, {
    targetId: Guid // Meteor.user GUID
  });
};
