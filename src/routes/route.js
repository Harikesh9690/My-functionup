const express = require('express');
const { union } = require('lodash');
const lodash = require('lodash');
// const abc = require('../introduction/intro')
const own = require('../logger/logger.js')
const info = require('../until/helper.js')
const abc = require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    own.Welcome()
    info.printDate()
    info.printmonth()
    info.getbatchinfo()
    abc.stringGame()
    let months = lodash.chunk(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 3);
    console.log(months)
    let oddnum = lodash.tail([1, 3, 5, 7, 9, 11, 13, 15, 17, 19])
    console.log(oddnum)
    let arr1 = [2, 13, 6, 12, 23]
    let arr2 = [24, 3, 6, 12, 23]
    let arr3 = [2, 3, 6, 12, 14]
    let arr4 = [4, 3, 6, 12, 23]
    let arr5 = [8, 3, 7, 12, 23]
    let arrT = lodash.union(arr1, arr2, arr3, arr4, arr5)
    console.log(arrT)
    let pairs = lodash.fromPairs([["horror", "The Shining"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"], ["drama", "Titanic"]])
    console.log(pairs)

    // abc.printName()
    res.send('My second ever api!')
});


router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data', function (req, res) {

})
module.exports = router;
// adding this comment for no reason