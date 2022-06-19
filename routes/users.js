const router = require('express').Router();
const { getUser, updateUser } = require('../controllers/users');
const { registrationValidation } = require('../middlewares/validation');

router.get('/me', getUser);
router.patch('/me', registrationValidation, updateUser);

module.exports = router;
