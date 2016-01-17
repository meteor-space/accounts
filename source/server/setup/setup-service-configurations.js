let env = Space.getenv.multi({
  loginStyle: ['SPACE_ACCOUNTS_SERVICE_CONFIGURATION_LOGIN_STYLE', 'popup', 'string'],
  googleClientId: ['SPACE_ACCOUNTS_SERVICE_CONFIGURATION_GOOGLE_CLIENT_ID', '243931874757-815k9jais66lotq0mut9ctqbsmhu5jt2.apps.googleusercontent.com', 'string'],
  googleSecret: ['SPACE_ACCOUNTS_SERVICE_CONFIGURATION_GOOGLE_SECRET', 'NipyXr0FnEn4RyAQ6ezaXJ1m', 'string'],
  facebookAppId: ['SPACE_ACCOUNTS_SERVICE_CONFIGURATION_FACEBOOK_APP_ID', '1699023327007320', 'string'],
  facebookSecret: ['SPACE_ACCOUNTS_SERVICE_CONFIGURATION_FACEBOOK_SECRET', 'baa2b12f03f86ef1aed0836f6152468f', 'string']
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

let setupFacebookServiceConfiguration = function() {

  if (env.facebookAppId !== '' && env.facebookSecret !== '') {
    ServiceConfiguration.configurations.upsert({service: 'facebook'}, {
      $set: {
        appId: env.facebookAppId,
        secret: env.facebookSecret,
        loginStyle: env.loginStyle
      }
    });
  }

};

Space.accounts.setupServiceConfigurations = function() {
  setupGoogleServiceConfiguration();
  setupFacebookServiceConfiguration();
};
