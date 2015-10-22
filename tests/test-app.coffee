class Space.accounts.TestApp extends Space.Application

  RequiredModules: ['Space.accounts']

  Configuration: {
    appId: 'TestApp'
  }

  beforeStart: ->
    # Reset DB collections before testing -> this is necessary because otherwise
    # some data can survive if an exception occurs and the app.reset() within
    # the BDD testing api is never reached!
    @reset()
