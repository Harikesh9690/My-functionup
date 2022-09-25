const express = require('express')
const router =express.Router()
const userController= require('../controllers/userController')
const bookController= require('../controllers/bookController')
const reviewController= require('../controllers/reviewController')
const middleware= require('../middlewares/auth')
const userm = require('../models/userModel')

// -------------------------testingapi-------------------------------------------------------
router.get('/test-me',function(req,res){
    res.send({msg : "working properly"})
})

// ------------------------userapi-----------------------------------------------------------

router.post('/register', userController.createuser)

router.post('/login', userController.userlogin)

// -----------------------bookapi-------------------------------------------------------------

router.post('/books',middleware.auth,bookController.createbook)

router.get('/books',bookController.getBookByQuery)

router.get('/books/:bookId', bookController.getBooksDetails)

router.put('/books/:bookId',middleware.auth, bookController.updatebook)

router.delete('/books/:bookId',middleware.auth, bookController.deleteBook)

// --------------------------reviewapi---------------------------------------------------------

router.post('/books/:bookId/review', reviewController.createreview)

router.delete('/books/:bookId/review/:reviewId', reviewController.deleteReviwsById)

router.put('/books/:bookId/review/:reviewId', reviewController.updatereview)


router.all("/**", function (req, res) {         
    res.status(400).send({
        status: false,
        msg: "The api request is not available"
    })
})

module.exports=router

