const router = require("express").Router()
const Users = require("../models/usersmodel")

router.post("/register", async (req, res, next) => {
  try {
    const {
      first_name,
      last_name,
      username,
      email,
      password } = req.body
    const users = await Users.add({ first_name, last_name, username, email, password })
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
})

module.exports = router
