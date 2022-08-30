const express = require('express');
const router = express.Router();
const userController2= require("../controllers/userController2")
const middlewares = require("../middlewares/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController2.createUser  )

router.post("/login", userController2.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middlewares.auth2, userController2.getUserData)

router.put("/users/:userId",middlewares.auth2, userController2.updateUser)

router.delete("/users/:userId",middlewares.auth2, userController2.deleteuser)

module.exports = router;