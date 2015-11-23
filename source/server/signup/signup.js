Space.eventSourcing.Process.extend(Space.accounts, `Signup`, {

  onExtending() {
    this.type('Space.accounts.Signup');
  },

  STATES: {
    initiated: 'initiated',
    failed: 'failed',
    completed: 'completed'
  },

  fields: {
    userId: Guid,
    error: Match.OneOf(String, null)
  },

  eventCorrelationProperty: 'signupId',

  commandMap() {
    return {
      'Space.accounts.InitiateSignup': this._initiateSignup,
      'Space.accounts.RetrySignup': this._retrySignup
    };
  },

  eventMap() {
    return {
      'Space.accounts.SignupInitiated': this._onSignupAttempt,
      'Space.accounts.SignupRetried': this._onSignupAttempt,
      'Space.accounts.UserCreated': this._onUserCreated,
      'Space.accounts.UserCreationFailed': this._onUserCreationFailed,
      'Space.accounts.SignupFailed': this._onSignupFailed,
      'Space.accounts.SignupCompleted': this._onSignupCompleted
    };
  },

  // ============= COMMAND HANDLERS =============

  _initiateSignup(command) {
    let data = this._eventPropsFromCommand(command);
    this.record(new Space.accounts.SignupInitiated(data));
  },

  _retrySignup(command) {
    let data = this._eventPropsFromCommand(command);
    data.userId = this.userId;
    this.record(new Space.accounts.SignupRetried(data));
  },

  // ============= EXTERNAL EVENT HANDLERS =============

  _onUserCreated() {
    this.record(new Space.accounts.SignupCompleted({
      sourceId: this.getId(),
      meta: this.meta
    }));
  },

  _onUserCreationFailed(event) {
    this.record(new Space.accounts.SignupFailed({
      sourceId: this.getId(),
      error: event.error,
      meta: this.meta
    }));
  },

  // ============= INTERNAL EVENT HANDLERS =============

  _onSignupAttempt(event) {
    this._assignFields(event);
    this.error = null;
    this._state = this.STATES.initiated;
  },

  _onSignupCompleted() {
    this._state = this.STATES.completed;
  },

  _onSignupFailed(event) {
    this._assignFields(event);
    this._state = this.STATES.failed;
  }

});

Space.accounts.Signup.registerSnapshotType('Space.accounts.SignupSnapshot');
