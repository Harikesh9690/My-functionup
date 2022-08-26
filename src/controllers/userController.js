const userModel = require('../models/usersModel')

const createUser = async function(req, res){
    let Data = req.body;
let saveData = await userModel.create(Data)
res.send({msg: saveData, status:"User created successfully"})
}

module.exports.createUser = createUser
