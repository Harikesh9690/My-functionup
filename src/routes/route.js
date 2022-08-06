const express = require('express');
// const abc = require('../introduction/intro')
const own = require('../logger/logger.js')
const info =require('../until/helper.js')
const abc = require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    own.Welcome()
     info.printDate()
     info.printmonth()
     info.getbatchinfo()
     abc.stringGame()
    // abc.printName()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason