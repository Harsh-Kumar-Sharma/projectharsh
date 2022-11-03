const { count } = require("console")
const ProductModel = require("../models/ProductModel")

const createproduct= async function(req,res){
    const data=req.body;
    let newproduct=await ProductModel.create(data);
    res.send({msg:newproduct});
}

module.exports.createproduct=createproduct;