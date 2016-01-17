
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
    'accounts-google',
    'accounts-facebook',
    'service-configuration',
    'check',
    'ecmascript',
    'underscore',
    'space:vo-user@0.2.1',
    'space:messaging@2.1.0',
    'space:domain@0.1.0',
    'splendido:accounts-meld@1.3.1'
  ]);

  // SHARED
  api.addFiles([
    // VALUE OBJECTS
    'source/shared/login-type-vo.js'
  ]);

  // SERVER
  api.addFiles([
    'source/server/module.js',
    'source/server/events.js',
    'source/server/commands.js',
    'source/server/setup/setup-service-configurations.js',
    'source/server/services/user-creation-service.js',
    'source/server/publishers/login-publisher.js',
    'source/server/startup.js'
  ], 'server');

  api.export('LoginType');

});

Package.onTest(function(api) {

  api.use([
    'coffeescript',
    'mongo',
    'accounts-base',
    'accounts-password',
    'accounts-google',
    'service-configuration',
    'check',
    'ejson',
    'ecmascript',
    'underscore',
    'space:vo-user@0.2.1',
    'space:messaging@2.1.0',
    'space:accounts@0.1.3',
    'space:domain@0.1.0',
    'practicalmeteor:munit@2.1.5',
    'space:testing@2.0.1',
    'splendido:accounts-meld@1.3.1'
  ]);

  api.addFiles([
    'tests/server/accounts.tests.js'
  ], 'server');

  api.addFiles([
    'tests/shared/login-type-vo.unit.js'
  ]);
});
