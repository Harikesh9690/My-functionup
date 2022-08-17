const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BookController2= require("../controllers/bookcontroller2")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)
router.post("/createBook", BookController.createBook  )
router.get("/getBooksData", BookController.getBooksData)
router.post("/creatbook", BookController2.creatbook ) 
router.get("/booklist", BookController2.getsumbooks)
router.get("/getbooksinyear", BookController2.sepyear )
router.get("/getParticularBooks", BookController2.sepycrt )
router.get("/getRSbooks", BookController2.selectSome)

module.exports = router;