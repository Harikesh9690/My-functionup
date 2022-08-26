const productmodel = require("../models/productModel")

const createproduct = async function(req, res){
     let Data = req.body
     let saveData = await productmodel.create(Data)
     res.send({msg: saveData})
}

module.exports.createproduct = createproduct;