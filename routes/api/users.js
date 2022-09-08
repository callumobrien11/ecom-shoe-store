const express = require('express')
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');


// POST /api/users/signup
router.post('/signup', usersCtrl.signup);
// POST /api/users/login
router.post('/login', usersCtrl.login);

module.exports = router;