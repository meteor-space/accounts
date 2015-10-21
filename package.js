
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
    'space:vo-user@0.2.1',
    'space:event-sourcing@2.1.0',
  ]);

  api.addFiles([
    'source/server/module.coffee',
    'source/server/commands.coffee',
    'source/server/events.coffee',
    // USERS
    'source/server/users/user.coffee',
    'source/server/users/users-router.coffee'
  ], 'server');

});

Package.onTest(function(api) {

  api.use([
    'coffeescript',
    'mongo',
    'underscore',
    'space:accounts',
    'space:vo-user@0.2.0',
    'practicalmeteor:munit@2.1.4',
    'space:testing@1.5.0',
  ]);

  api.addFiles([
    'tests/test-app.coffee',
    'tests/users/users.test.coffee'
  ], 'server');

});
