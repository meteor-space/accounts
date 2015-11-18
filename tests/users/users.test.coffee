
{User, CreateUser, RegisterSuccessfulLogin, RegisterFailedLogin, UserCreated, UserLoggedIn, UserLoginFailed } = Space.accounts

describe 'Space.accounts.User', ->

  beforeEach ->
    @userId = new Guid
    @data = {
      username: new Username('testUsername')
      email: new EmailAddress('test@email.com')
      password: new Password('123')
    }
    @type = 'password'
    @error = "Login attempt failed"

  describe 'creating users', ->

    it 'generates the user create event', ->
      Space.accounts.test(Space.accounts.User)
      .given(
        new CreateUser _.extend {}, @data, {
          targetId: @userId
        }
      )
      .expect([
          new UserCreated _.extend {}, @data, {
            sourceId: @userId
            version: 1
          }
        ])

  describe 'authorising users', ->

    it 'publishes user logged in events', ->
      Space.accounts.test(Space.accounts.User)
      .given([
        new UserCreated _.extend {}, @data, {
          sourceId: @userId
          version: 1
        }
      ])
      .when([
        new RegisterSuccessfulLogin({
          targetId: @userId
          type: @type
        })
      ])
      .expect([
          new UserLoggedIn({
            sourceId: @userId
            version: 2
            timestamp: new Date()
            via: @type
          })
        ])

    it 'publishes user login error events', ->
      Space.accounts.test(Space.accounts.User)
      .given([
        new UserCreated _.extend {}, @data, {
          sourceId: @userId
          version: 1
        }
      ])
      .when([
        new RegisterFailedLogin {
          targetId: @userId
          type: @type
          error: @error
        }
      ])
      .expect([
        new UserLoginFailed {
          sourceId: @userId
          version: 2
          timestamp: new Date()
          via: @type
          error: @error
        }
      ])
