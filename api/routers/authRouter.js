const router = require("express").Router();
const Users = require("../models/usersmodel");
const {
  validateRegistration,
  usernameAndEmailAvailability,
} = require("../middleware/authMiddleware");

router.post(
  "/register",
  validateRegistration,
  usernameAndEmailAvailability,
  async (req, res, next) => {
    try {
      const users = await Users.add(req._registration);
      res.status(201).json(users);
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
