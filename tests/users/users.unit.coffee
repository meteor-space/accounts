
describe 'Space.accounts.User', ->

  beforeEach ->
    @createUser = new Space.accounts.CreateUser {
      targetId: new Guid
      username: new Username('testUsername')
      email: new EmailAddress('test@email.com')
      password: new Password('123')
    }

  describe 'creating users', ->

    it 'publishes user created events', ->

      TestAggregate(Space.accounts.User)
      .Given(@createUser)
      .Expect([
          new Space.accounts.UserCreated {
            sourceId: @createUser.targetId
            timestamp: new Date()
            username: @createUser.username
            email: @createUser.email
            password: @createUser.password
          }
        ])

  describe 'authorising users', ->

    it 'publishes user logged in events', ->

      TestAggregate(Space.accounts.User)
      .Given([
          new Space.accounts.UserCreated {
            sourceId: @createUser.targetId
            timestamp: new Date()
            username: @createUser.username
            email: @createUser.email
            password: @createUser.password
          }
        ])
      .When([
          new Space.accounts.RegisterSuccessfulLogin {
            targetId: @createUser.targetId
            type: "password"
          }
        ])
      .Expect([
          new Space.accounts.UserLoggedIn {
            sourceId: @createUser.targetId
            timestamp: new Date()
            via: "password"
          }
        ])

    it 'publishes user login error events', ->

      TestAggregate(Space.accounts.User)
      .Given([
          new Space.accounts.UserCreated {
            sourceId: @createUser.targetId
            timestamp: new Date()
            username: @createUser.username
            email: @createUser.email
            password: @createUser.password
          }
        ])
      .When([
          new Space.accounts.RegisterFailedLogin {
            targetId: @createUser.targetId
            type: "password"
            error: "Login attempt failed"
          }
        ])
      .Expect([
          new Space.accounts.UserLoginFailed {
            sourceId: @createUser.targetId
            timestamp: new Date()
            via: "password"
            error: "Login attempt failed"
          }
        ])