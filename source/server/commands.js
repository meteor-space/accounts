
Space.accounts.configureCommands = function(configuration) {

  Space.messaging.define(Space.messaging.Command, 'Space.accounts', {

    SignupUser: _.extend(configuration.accounts.signupUserCommand, {
      targetId: Guid // Meteor.user GUID
    })

  });

};
