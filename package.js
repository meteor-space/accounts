
Package.describe({
  name: 'space:accounts',
  summary: 'Accounts module for Space applications',
  version: '0.1.3',
  git: 'https://github.com/meteor-space/accounts.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.0');

  api.use([
    'coffeescript',
    'mongo',
    'accounts-base',
    'accounts-password',
    'check',
    'ecmascript',
    'underscore',
    'space:vo-user@0.2.1',
    'space:event-sourcing@2.1.0'
  ]);

  api.addFiles([
    'source/server/module.coffee',
    'source/server/commands.coffee',
    'source/server/events.coffee',
    // SERVICES
    'source/server/services/meteor-users-service.js',
    // REGISTRATION
    'source/server/registration/registration.js',
    'source/server/registration/registration-router.js',
    // USERS
    'source/server/accounts/account.coffee',
    'source/server/accounts/accounts-router.coffee'
  ], 'server');

});

Package.onTest(function(api) {

  api.use([
    'coffeescript',
    'mongo',
    'underscore',
    'space:testing@2.0.1',
    'space:accounts',
    'space:vo-user@0.2.0',
    'practicalmeteor:munit@2.1.5'
  ]);

  api.addFiles([
    'tests/users/users.test.coffee'
  ], 'server');

});
