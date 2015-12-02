
Space.accounts.configureCommands = function(configuration) {

  let commandWasNotDefinedYet = Space.accounts.SignupUser === undefined;

  // Define or override existing signup command
  Space.messaging.Command.extend(Space.accounts, 'SignupUser',
    _.extend(configuration.accounts.signupUserCommand, {
      targetId: Guid // Meteor.user GUID
    })
  );

  // Only register EJSON type once
  if (commandWasNotDefinedYet) {
    Space.accounts.SignupUser.type('Space.accounts.SignupUser');
  }

};
