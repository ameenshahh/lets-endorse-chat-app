// library imports
const express = require("express");
const router = express.Router();

// controller imports
const signup = require("./signup");
const login = require('./login')

// validator imports
const signupValidator = require("./validators/signupValidator");
const loginValidator = require("./validators/loginValidator");

router.post("/signup", signupValidator, signup);
router.post("/login", loginValidator, login);

module.exports = router;
