class Space.accounts.IntegrationTestApp extends Space.Application

  RequiredModules: ['Space.accounts']

  Dependencies: {
    eventBus: 'Space.messaging.EventBus'
    commandBus: 'Space.messaging.CommandBus'
    accountsBcConfig: 'Space.accounts.Configuration'
  }

  appId: 'IntegrationTestApp'

  configure: ->
    @accountsBcConfig.appId = @appId

  publish: (event) -> @eventBus.publish event

  subscribe: (type, handler) -> @eventBus.subscribeTo type, handler

  send: (command) -> @commandBus.send command

  reset: ->
# Tell all sub-modules to reset their data / stop long-living observers
    module.reset?() for _, module of @modules
