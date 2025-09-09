const express = require('express');
const router = express.Router();
const User = require('../models/user.model'); 
const { handleSignup, handleLogin, handleLogout } = require('../controllers/auth.controller');

router.post("/signup", handleSignup);
router.post("/login", handleLogin);
router.post("/logout", handleLogout);


module.exports = router;
