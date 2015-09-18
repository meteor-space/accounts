class Space.accounts.User extends Space.eventSourcing.Aggregate

  initialize: (createCommand) -> @handle createCommand

  @handle Space.accounts.CreateUser, (command) ->

    @record new Space.accounts.UserCreated {
      sourceId: @getId()
      timestamp: new Date()
      username: command.username
      email: command.email
      password: command.password
    }

  @handle Space.accounts.RegisterSuccessfulLogin, (command) ->

    @record new Space.accounts.UserLoggedIn {
      sourceId: @getId()
      timestamp: new Date()
      via: command.type
    }

  @handle Space.accounts.RegisterFailedLogin, (command) ->

    @record new Space.accounts.UserLoginFailed {
      sourceId: @getId()
      timestamp: new Date()
      via: command.type
      error: command.error
    }
