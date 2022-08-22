const express = require("express");
const User = require("../model/User");
const userValidationSchema = require("../utils/validations/userValidationSchema");

const {
  createUser,
  authMe,
  loginUser,
} = require("../controllers/auth.controllers");
const router = express.Router();

router.get("/me", authMe);

router.post("/register", userValidationSchema, createUser);

router.post("/login", loginUser);

router.get("/users", async (req, res) => {
  const users = await User.find().select({
    username: 1,
    email: 1,
    createdAt: 1,
    _id: 0,
  });
  res.json(users);
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  const deletedUser = await User.findByIdAndDelete(id);
  res.json(deletedUser);
});

module.exports = router;
