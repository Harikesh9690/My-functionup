
const bookModel = require("../models/bookModel")

const creatbook = async function (req, res) {
    let data = req.body;
    let savedata = await bookModel.create(data)
    res.send({ sms: savedata })
}

const getsumbooks = async function (req, res) {
    let getdata = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ sms: getdata })
}

const sepyear = async function (req, res) {
    let data = req.query.year;
    let savedata = await bookModel.find({ year: data })
    res.send({ sms: savedata })
}


const sepycrt = async function (req, res) {
    let data = req.body
    let savedata = await bookModel.find({ data })
    res.send({ sms: savedata })
}

const selectSome = async function (req, res) {
    let savedata = await bookModel.find({indianPrice: {$in: ["700rs" , "500rs", "550rs"] } })
    res.send({ sms: savedata })
}
module.exports.creatbook = creatbook;
module.exports.getsumbooks = getsumbooks;
module.exports.sepyear = sepyear;
module.exports.sepycrt = sepycrt;
module.exports.selectSome= selectSome;