class Space.accounts.Account extends Space.eventSourcing.Aggregate

  commandMap: -> {
    'Space.accounts.CreateAccount': @_createAccount

    'Space.accounts.RegisterSuccessfulLogin': (command) ->
      @record new Space.accounts.AccountLoggedIn {
        sourceId: @getId()
        timestamp: new Date()
        via: command.type
      }
      
    'Space.accounts.RegisterFailedLogin': (command) ->
      @record new Space.accounts.AccountLoginFailed @_eventPropsFromCommand(command)
  }

  _createAccount: (command) ->
    @record new Space.accounts.AccountCreated @_eventPropsFromCommand(command)

Space.accounts.Account.registerSnapshotType 'Space.accounts.AccountSnapshot'
