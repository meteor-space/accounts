Package.describe({
  name: 'space:accounts',
  version: '0.1.0',
  summary: 'Accounts module for Space applications',
  git: 'https://github.com/meteor-space/accounts.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.2.0.1');

  api.use([
    'coffeescript',
    'mongo',
    'accounts-base',
    'accounts-password',
    'check',
    'space:event-sourcing@1.3.3',
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
    'accounts-password',
    'space:accounts',
    'practicalmeteor:munit@2.1.4',
    'space:testing@1.4.3'
  ]);

  api.addFiles([
    'tests/test-app.coffee',
    'tests/meteor-users-dao.unit.coffee'
  ], 'server');

});
