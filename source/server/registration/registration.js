Space.eventSourcing.Process.extend(Space.accounts, `Registration`, {

  onExtending() {
    this.type('Space.accounts.Registration');
  },

  STATES: {
    initiated: 'initiated',
    userRegistered: 'userRegistered',
    failed: 'failed',
    completed: 'completed'
  },

  fields: {
    accountId: Guid,
    userId: Guid,
    username: Match.OneOf(Username, null),
    email: Match.OneOf(EmailAddress, null),
    password: Password,
    error: Match.OneOf(String, null)
  },

  eventCorrelationProperty: 'accountRegistrationId',

  commandMap() {
    return {
      'Space.accounts.Register': this._register
    };
  },

  eventMap() {
    return {
      'Space.accounts.RegistrationInitiated': this._onRegistrationInitiated,
      'Space.accounts.UserCreated': this._onUserCreated,
      'Space.accounts.UserCreationFailed': this._onUserCreationFailed,
      'Space.accounts.RegistrationFailed': this._onRegistrationFailed,
      'Space.accounts.UserRegistered': this._onUserRegistered,
      'Space.accounts.AccountCreated': this._onAccountCreated,
      'Space.accounts.RegistrationCompleted': this._onRegistrationCompleted
    };
  },

  // ============= COMMAND HANDLERS =============

  _register(command) {
    let data = this._eventPropsFromCommand(command);
    this.record(new Space.accounts.RegistrationInitiated(data));
  },

  // ============= EXTERNAL EVENT HANDLERS =============

  _onUserCreated(event) {
    this.record(new Space.accounts.UserRegistered({
      sourceId: this.getId(),
      userId: event.userId
    }));

    this.trigger(new Space.accounts.CreateAccount({
      targetId: this.accountId,
      userId: this.userId,
      username: this.username,
      email: this.email,
      password: this.password
    }));
  },

  _onUserCreationFailed(event) {
    this.record(new Space.accounts.RegistrationFailed({
      sourceId: this.getId(),
      error: event.error
    }));
  },

  _onAccountCreated() {
    this.record(new Space.accounts.RegistrationCompleted({
      sourceId: this.getId()
    }));
  },

  // ============= INTERNAL EVENT HANDLERS =============

  _onRegistrationInitiated(event) {
    this._assignFields(event);
    this.error = null;
    this._state = this.STATES.initiated;
  },

  _onRegistrationFailed(event) {
    this._assignFields(event);
    this._state = this.STATES.failed;
  },

  _onUserRegistered() {
    this._state = this.STATES.userRegistered;
  },

  _onRegistrationCompleted() {
    this._state = this.STATES.completed;
  }

});

Space.accounts.Registration.registerSnapshotType('Space.accounts.RegistrationSnapshot');
