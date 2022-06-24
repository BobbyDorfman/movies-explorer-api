const router = require('express').Router();
const { getUser, updateUser } = require('../controllers/users');
const { userDataValidation } = require('../middlewares/validation');

router.get('/me', getUser);
router.patch('/me', userDataValidation, updateUser);

module.exports = router;
