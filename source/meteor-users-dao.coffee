class Space.accounts.MeteorUsersDAO extends Space.Object

  Dependencies: {
    meteor: 'Meteor'
    accounts: 'Accounts'
  }

  all: -> @meteor.users.find()

  createUser: (command) ->
    @accounts.createUser({
#      guid: command.targetId
      username: command.username
      email: command.email
      password: command.password
    })
