const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")
const authormodel=require("../models/authormodel")
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const creatAuthor=async function(req,res)
 {
    let data=req.body
    let author=await authormodel.create(data)
    res.send({msg:author})
}
const getBooksData= async function (req, res) {
    let all= await authormodel.find( {authorname : "Chetan Bhagat" } )
    const id=all[0].author_id;
    let Book=await BookModel.find({author_id:id})
    res.send({msg:Book,writtenby:all})
}



const updateBooks= async function (req, res) {
    let allBooks= await BookModel.findOneAndUpdate( 
        { name: "Two states"} , //condition
        { $set: {price:100} }, //update in data
        { new: true },// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     let id=allBooks.author_id
     let jo=await authormodel.findOne({author_id:id}).select({authorname:1,_id:0})
    
     res.send( { msg: allBooks,author:jo})
     
}
// const updateauthor=async function(req,res){
//     let allBooks= await BookModel.findOne( 
//         { name: "Two states"} , //condition
//      )
//     let id=allBooks.author_id
//     let jo=await authormodel.find({author_id:id})
//     res.send({author:jo})
// }
const authorfind= async (req,res)=>{
    let does = await BookModel.find( { price : { $gte: 50, $lte: 100} } )

const li=[]
    for(let i=0;i<does.length;i++){
      let so=does[i].author_id
      let authorName=await authormodel.findOne({author_id:so}).select({authorname:1,author_id:1,_id:0})
      li.push(authorName)
    }
   return res.send({msg:li})
}
const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks,author:jo.authorname})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
module.exports.creatAuthor=creatAuthor
//module.exports.updateauthor=updateauthor
module.exports.authorfind=authorfind
