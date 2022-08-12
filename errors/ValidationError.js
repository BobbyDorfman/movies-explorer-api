const { VALIDATION_ERROR } = require('../utils/errorConstants');

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = VALIDATION_ERROR;
  }
}
module.exports = ValidationError;
