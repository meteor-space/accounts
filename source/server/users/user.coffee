class Space.accounts.User extends Space.eventSourcing.Aggregate

  commandMap: ->
    'Space.accounts.CreateUser': (command) ->
      @record new Space.accounts.UserCreated {
        sourceId: @getId()
        timestamp: new Date()
        username: command.username
        email: command.email
        password: command.password
      }
    'Space.accounts.RegisterSuccessfulLogin': (command) ->
      @record new Space.accounts.UserLoggedIn {
        sourceId: @getId()
        timestamp: new Date()
        via: command.type
      }
    'Space.accounts.RegisterFailedLogin': (command) ->
      @record new Space.accounts.UserLoginFailed {
        sourceId: @getId()
        timestamp: new Date()
        via: command.type
        error: command.error
      }
