const { validationResult } = require("express-validator");
const generateToken = require("../utils/jwt/generateToken");
const bcrypt = require("bcrypt");
const User = require("../model/User");
const validateToken = require("../utils/jwt/validateToken");

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const errors = validationResult(req);
  const emailError = await User.findOne({ email: email });
  if (errors.errors.length > 0) return res.status(422).json(errors.errors);
  if (emailError !== null)
    return res
      .status(422)
      .json({ status: "failed", message: "email is already in use" });

  try {
    const user = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, 10),
      admin: false,
    });
    const token = await generateToken({
      id: user._id,
    });
    return res.json({
      status: "ok",
      message: "user created sucessfull",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: "failed",
      error: error,
    });
  }
};

const authMe = async (req, res) => {
  const token = req.headers.authorization;

  if (!token)
    return res.status(401).json({
      auth: false,
      message: "No token provided",
    });

  const decoded = validateToken(token);
  if (!decoded) return res.status(401).json({ msg: "Invalid token" });

  try {
    const { username, email, admin } = await User.findById(decoded.id);
    return res.json({
      username,
      email,
      admin
    });
  } catch (error) {
    return res.json(error);
  }
};

module.exports = {
  createUser,
  authMe,
};
