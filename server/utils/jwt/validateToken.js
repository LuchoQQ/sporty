const jwt = require("jsonwebtoken");
require("dotenv").config();

const validateToken = (token) => {
  try {
    token = token.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.SECRET);
    return decoded;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = validateToken;
