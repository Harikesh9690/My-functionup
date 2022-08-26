const ordermodel = require("../models/orderModel")
const userModel = require("../models/usersModel")
const productModel = require("../models/productModel")

const createOrder = async function (req, res) {
    let Data = req.body;
    let headerData = req.headers.isfreeappuser;
    let userId = await userModel.findById({ _id: Data.userId })
    if (!userId) {
        return res.send({ Error: "this user is not found" })
    }
    let productId = await productModel.findById(Data.productId)
    if (!productId) {
        return res.send({ Error: "this product is not available" })
    }
    if (headerData == 'false') {
        if (userId.balance >= productId.price) {
            Data.amount = productId.price
            Data.isFreeAppUser = headerData
            let saveData = await ordermodel.create(Data)
            await userModel.updateOne({ _id: userId }, { $inc: { balance: -productId.price } })
            await userModel.updateOne({ _id: userId }, { $set: { isFreeAppUser: headerData } })
            res.send({ saveData, msg: "Order Booked successfully" })
        } else if (userId.balance < productId.price) {
            return res.send({ msg: "You do't have enough balance" })
        }
    } else if (headerData == 'true') {
        Data.isFreeAppUser = headerData
        let saveData = await ordermodel.create(Data)
        res.send({ saveData, msg: "Order Booked successfully" })
    }
}


module.exports.createOrder = createOrder