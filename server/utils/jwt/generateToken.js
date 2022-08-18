const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (data) => {
    console.log(data)
  const token = jwt.sign(data, process.env.SECRET, {
    expiresIn: 60 * 60 * 24,
  });

  return token;
};

module.exports = generateToken;
