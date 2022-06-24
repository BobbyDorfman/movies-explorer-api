const { CONFLICT_ERROR } = require('../utils/errorConstants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ConflictError';
    this.statusCode = CONFLICT_ERROR;
  }
}

module.exports = ConflictError;
