Meteor.startup(function() {

  if (Meteor.isServer && process.env.NODE_ENV !== 'test') {
    Space.accounts.setupServiceConfigurations();
  }

});
