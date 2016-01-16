let env = Space.getenv.multi({
  loginStyle: ['SPACE_ACCOUNTS_SERVICE_CONFIGURATION_LOGIN_STYLE', 'popup', 'string'],
  googleClientId: ['SPACE_ACCOUNTS_SERVICE_CONFIGURATION_GOOGLE_CLIENT_ID', '', 'string'],
  googleSecret: ['SPACE_ACCOUNTS_SERVICE_CONFIGURATION_GOOGLE_SECRET', '', 'string']
});

let setupGoogleServiceConfiguration = function() {

  if (env.googleClientId !== '' && env.googleSecret !== '') {
    ServiceConfiguration.configurations.upsert({service: 'google'}, {
      $set: {
        clientId: env.googleClientId,
        secret: env.googleSecret,
        loginStyle: env.loginStyle
      }
    });
  }

};

Space.accounts.setupServiceConfigurations = function() {
  setupGoogleServiceConfiguration();
};
