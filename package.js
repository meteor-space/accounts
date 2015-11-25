
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
    'space:messaging@2.1.0'
  ]);

  api.addFiles(['source/client/namespace.js'], 'client');
  api.addFiles(['source/server/module.js'], 'server');

  api.addFiles([
    'source/shared/api-commands.js'
  ]);

  api.addFiles([
    'source/server/events.js',
    // SERVICES
    'source/server/services/user-creation-service.js',
    // PUBLISHERS
    'source/server/publishers/authentication-publisher.js'
  ], 'server');

});
