const router = require('express').Router();
const { authorizationValidation, registrationValidation } = require('../middlewares/validation');
const { createUser, login } = require('../controllers/users');

// Роуты, не требующие авторизации - регистрация и логин
router.post('/signup', registrationValidation, createUser);
router.post('/signin', authorizationValidation, login);

module.exports = router;
