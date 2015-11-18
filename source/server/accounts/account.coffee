class Space.accounts.Account extends Space.eventSourcing.Aggregate

  commandMap: ->
    'Space.accounts.CreateAccount': (command) ->
      @record new Space.accounts.AccountCreated {
        sourceId: @getId()
        registrationId: command.registrationId
        userId: command.userId
        timestamp: new Date()
        username: command.username ? null
        email: command.email ? null
        password: command.password
      }
    'Space.accounts.RegisterSuccessfulLogin': (command) ->
      @record new Space.accounts.AccountLoggedIn {
        sourceId: @getId()
        timestamp: new Date()
        via: command.type
      }
    'Space.accounts.RegisterFailedLogin': (command) ->
      @record new Space.accounts.AccountLoginFailed {
        sourceId: @getId()
        timestamp: new Date()
        via: command.type
        error: command.error
      }

Space.accounts.Account.registerSnapshotType 'Space.accounts.AccountSnapshot'
