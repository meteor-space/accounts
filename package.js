
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
    'service-configuration',
    'check',
    'ecmascript',
    'underscore',
    'space:vo-user@0.2.1',
    'space:messaging@2.1.0'
  ]);

  api.addFiles([
    'source/server/module.js',
    'source/server/events.js',
    'source/server/commands.js',
    'source/server/services/user-creation-service.js',
    'source/server/publishers/login-publisher.js'
  ], 'server');

});
