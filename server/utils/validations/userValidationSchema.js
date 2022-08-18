const { check } = require("express-validator");

const userValidationSchema = [
  check("username")
    .isLength({ min: 4, max: 10 })
    .withMessage("Username must have between 4 and 10 characters"),
  check("email").isEmail().withMessage("Email must be an email"),
  check("password").isLength({ min: 7 }),
];

module.exports = userValidationSchema;
