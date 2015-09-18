class Space.accounts.MeteorUsersDAO extends Space.Object

  Dependencies: {
    meteor: 'Meteor'
  }

  all: -> @meteor.users.find()
