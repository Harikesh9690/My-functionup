const publishermodel = require("../models/publisherModel") 

const createpublisher = async function(req, res){
let Data = req.body;
let saveData = await publishermodel.create(Data)
res.send({msg: saveData})
}

module.exports.createpublisher =createpublisher;