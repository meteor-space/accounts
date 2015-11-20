class Space.accounts.Account extends Space.eventSourcing.Aggregate

  commandMap: -> {
    'Space.accounts.CreateAccount': (command) ->
      @record new Space.accounts.AccountCreated @_eventPropsFromCommand(command)

    'Space.accounts.RegisterSuccessfulLogin': (command) ->
      @record new Space.accounts.AccountLoggedIn @_eventPropsFromCommand(command)

    'Space.accounts.RegisterFailedLogin': (command) ->
      @record new Space.accounts.AccountLoginFailed @_eventPropsFromCommand(command)
  }

Space.accounts.Account.registerSnapshotType 'Space.accounts.AccountSnapshot'
