
{
  Account, CreateAccount, RegisterSuccessfulLogin, RegisterFailedLogin,
  AccountCreated, AccountLoggedIn, AccountLoginFailed
} = Space.accounts

describe 'Space.accounts.Account', ->

  beforeEach ->
    @accountId = new Guid()
    @userId = new Guid()
    @data = {
      username: new Username('testUsername')
      email: new EmailAddress('test@email.com')
      password: new Password('123')
    }
    @type = 'password'
    @error = "Login attempt failed"

  createAccount = -> new CreateAccount _.extend {}, @data, {
    targetId: @accountId
    userId: @userId
  }

  accountCreated = -> new AccountCreated _.extend {}, @data, {
    sourceId: @accountId
    userId: @userId
    version: 1
  }

  describe 'creating users', ->

    it 'generates the user create event', ->
      Space.accounts.test(Space.accounts.Account)
      .given(createAccount.call(this))
      .expect([accountCreated.call(this)])

  describe 'authorising users', ->

    it 'publishes user logged in events', ->
      Space.accounts.test(Space.accounts.Account)
      .given([accountCreated.call(this)])
      .when([
        new RegisterSuccessfulLogin({
          targetId: @accountId
          loginService: @type
        })
      ])
      .expect([
        new AccountLoggedIn({
          sourceId: @accountId
          version: 2
          timestamp: new Date()
          loginService: @type
        })
      ])

    it 'publishes user login error events', ->
      Space.accounts.test(Space.accounts.Account)
      .given([accountCreated.call(this)])
      .when([
        new RegisterFailedLogin {
          targetId: @accountId
          loginService: @type
          error: @error
        }
      ])
      .expect([
        new AccountLoginFailed {
          sourceId: @accountId
          version: 2
          timestamp: new Date()
          loginService: @type
          error: @error
        }
      ])
