const express = require('express');
const { login, signup, profile } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', profile);

module.exports = router;
