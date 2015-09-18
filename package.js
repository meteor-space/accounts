Package.describe({
  name: 'space:accounts',
  version: '0.1.0',
  summary: 'Accounts module for Space applications',
  git: 'https://github.com/meteor-space/accounts.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');

  api.use([
    'coffeescript',
    'mongo',
    'accounts-password',
    'check',
    'space:event-sourcing@1.2.3',
  ]);

  api.addFiles([
    'source/server.coffee',
  ], 'server');

  api.addFiles([
    'source/commands.coffee'
  ]);

  api.addFiles([
    'source/meteor-users-dao.coffee',
    'source/registration-controller.coffee'
  ], 'server');

  api.addFiles([
    'source/client.coffee',
  ], 'client');

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
