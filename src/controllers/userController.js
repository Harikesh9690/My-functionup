const UserModel = require("../models/userModel")


const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const createbook = async function(req, res){
    let Data = req.body;
    let Savedata = await UserModel.create(Data);
    res.send({sms: Savedata})
     }

 const getbookdata= async function(req, res){
    let allbooks= await userModel.find()
    res.send({sms: allbooks})
 }   

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createbook= createbook
module.exports.getbookdata= getbookdata