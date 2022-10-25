const book = require("../models/book")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const createbook= async function(req,res) {
    let data =req.body
    let savedData= await book.create(data)
    res.send({msg:savedData})
}
const getbookData= async function (req, res) {
    let allUsers= await book.find()
    res.send({msg: allUsers})
}
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createbook=createbook
module.exports.getbookData=getbookData