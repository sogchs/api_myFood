const express = require('express');
const router = express.Router();

const secure = require('../middlewares/secure.mid');
const userController = require('../controllers/user.controller');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;
