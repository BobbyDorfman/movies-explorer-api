const { AUTH_ERROR } = require('../utils/errorConstants');

class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthError';
    this.statusCode = AUTH_ERROR;
  }
}

module.exports = AuthError;
