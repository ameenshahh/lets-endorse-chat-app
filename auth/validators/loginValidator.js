const { body, validationResult } = require("express-validator");

const validator = [
  body("username")
    .notEmpty()
    .withMessage("username is required")
    .isString()
    .withMessage("username must be a string"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isString()
    .withMessage("password must be a string"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validator;
