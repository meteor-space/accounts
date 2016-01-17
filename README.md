# space:accounts [![Build Status](https://travis-ci.org/meteor-space/accounts.svg)](https://travis-ci.org/meteor-space/accounts)
Accounts module for Space applications.

## Documentation
coming soon …

## Installation
`meteor add space:accounts`

## Environment variables for service configurations

Support for user authentication with external services is configured with these environment variables:

### Login style for all services
`SPACE_ACCOUNTS_SERVICE_CONFIGURATION_LOGIN_STYLE='popup'`

Available options are 'popup' and 'redirect', if environment variable is not specified it defaults to 'popup'

### Login with Google service parameters
`SPACE_ACCOUNTS_SERVICE_CONFIGURATION_GOOGLE_CLIENT_ID='your-google-client-id'`
`SPACE_ACCOUNTS_SERVICE_CONFIGURATION_GOOGLE_SECRET='your-google-secret'`

### Login with Facebook service parameters
`SPACE_ACCOUNTS_SERVICE_CONFIGURATION_FACEBOOK_APP_ID='your-facebook-app-id'`
`SPACE_ACCOUNTS_SERVICE_CONFIGURATION_FACEBOOK_SECRET='your-facebook-secret'`

See [Meteor Docs](http://docs.meteor.com/#/full/meteor_loginwithexternalservice) for details.

## License
Licensed under the MIT license.