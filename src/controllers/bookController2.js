const authorModel= require("../models/authorsModel")
const bookModel2= require("../models/bookModel2");

const createauthor= async function(req, res){
    let Data= req.body;
    let saveData= await authorModel.create(Data)
    res.send({sms:saveData})
}
const createbooks= async function(req, res){
    let Data= req.body;
    let saveData= await bookModel2.create(Data)
    res.send({sms: saveData})
}

const bookdairy = async function(req , res){
let author= await authorModel.find({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
let authorbooks = await bookModel2.find({author_id: author[0].author_id})
res.send(authorbooks)
}

const sumupdate = async function(req, res){
    let Data= req.body
    let price = await bookModel2.findOneAndUpdate({name:"Two states"},{$set:Data},{new: true})
   let author = await authorModel.find({author_id: price.author_id}).select({author_name:1,_id:0})   
        res.send({msg:author,price})
} 
const bookrange= async function(req, res){
    let range = await bookModel2.find({price: {$gte:50,$lte:100}})
    let abc = range.map(x=>x.author_id)
    let newrange = await authorModel.find({author_id:abc}).select({author_name:1,_id:0})
    res.send({msg:newrange})
}
module.exports.createauthor= createauthor;
module.exports.createbooks= createbooks;
module.exports.bookdairy= bookdairy;
module.exports.sumupdate= sumupdate;
module.exports.bookrange= bookrange;

