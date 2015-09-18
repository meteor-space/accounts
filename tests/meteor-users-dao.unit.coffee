describe.server 'Space.accounts.MeteorUsersDAO', ->

  beforeEach ->
    @usersDao = new Space.accounts.MeteorUsersDAO()
    @usersDao.meteor = Meteor
    Meteor.users.remove {}
    Accounts.createUser({ username: 'testUsername1', password: 'testPassword1'})
    Accounts.createUser({ username: 'testUsername2', password: 'testPassword2'})
    Accounts.createUser({ username: 'testUsername3', password: 'testPassword3'})

  afterEach ->
    Meteor.users.remove {}

  describe 'getting users', ->

    it 'returns all users', ->
      expect(@usersDao.all()).to.deep.equal(Meteor.users.find())
