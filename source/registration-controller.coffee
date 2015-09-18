class Space.accounts.RegistrationController

  Dependencies: {
    accounts: 'Accounts'
    usersDao: 'Space.accounts.MeteorUsersDAO'
  }

  onDependenciesReady: ->
    @accounts.onCreateUser => console.log('onCreateUser')

  @handle Space.accounts.CreateUser, (command) ->
    @usersDao.createUser(command)
