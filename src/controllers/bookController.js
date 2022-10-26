const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getbooklist= async function (req,res){
    let list =await BookModel.find().select( { bookName: 1, authorName:1,_id: 0})
    res.send({msg:list})
}
const getBooksInYear = async function(req,res) {
    const ye =req.query.year
    let year= await BookModel.find({year:{$eq:ye}})
    res.send({msg:year})
} 
const getParticularBooks = async function (req, res) {   //problem 4
    let queryObj = req.body
    let allBooks= await BookModel.find(queryObj)
    res.send({msg: allBooks})
}
const getXINRBooks = async function(req,res) {
    let rup= await BookModel.find({indianPrice:{$or:["100","200","500"]}})
    res.send({msg:rup})
} 
const getRandomBooks = async function (req, res) {     
    let allBooks= await BookModel.find({$or:[{totalPages:{$gt:500}},{stockAvailable : true }]}) 
    res.send({msg: allBooks})
    }
    https://drive.google.com/file/d/1hhPBX2v_QVvTaR738zRpVYnH81Oydqwk/view?usp=sharing

module.exports.createBook= createBook
module.exports.getbooklist=getbooklist
module.exports.getBooksInYear=getBooksInYear
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks
module.exports.getParticularBooks=getParticularBooks
