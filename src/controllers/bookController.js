const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
    let book = req.body;
    if (!book.author) {
        return res.send({ data: "Author detail is required" })
    }
    let authorId = await authorModel.findById(book.author)
    if (!authorId) {
        return res.send({ data: "this author is not present" })
    }
    if (!book.publisher) {
        return res.send({ data: "publisher detail is required" })
    }
    let publisherId = await publisherModel.findById(book.publisher)
    if (!publisherId) {
        return res.send({ data: "this publisher is not present" })
    }
    let bookCreated = await bookModel.create(book)

    res.send({ data: bookCreated })
}

const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author publisher')
    res.send({ data: specificBook })

}

const Books = async function (req, res) {
    let updatebooks = await bookModel.updateMany(
        { publisher: { $in: ["62ff6c0257bc2c49b3c6487c", "6300c51fadd7a3609eaf79f7"] } },
        { $set: { isHardCover: true } },
        { new: true }
    )
    res.send(updatebooks)
}

const UpdatePrice = async function (req, res) {
    let getId = await authorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
    let idInarray = getId.map(x => x._id)
    let priceUpdated = await bookModel.updateMany(
        { author: { $in: idInarray } },
        { $inc: { price: +10 } },
        { new: true }
    )
    res.send(priceUpdated)
}
module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.Books = Books
module.exports.UpdatePrice = UpdatePrice
