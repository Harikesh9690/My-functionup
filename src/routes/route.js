const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController");
const userModel = require('../models/userModel.js');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/books", UserController.createbook)

router.get("/getallbooks", UserController.getbookdata)

module.exports = router;