
const OrderModel= require("../models/OrderModel")
const ProductModel = require("../models/ProductModel")
const userModel = require("../models/userModel")

const createOrder= async function (req, res) {
    let data = req.body
    let {userId,productId} = data

     //get user data in db
    let userdetail= await userModel.find();
    //get productdetails in db
    let productdetail= await ProductModel.find();
        //find the userid in db
    const userfetch=userdetail.find(x=>x._id==userId);
    //find the productid in db
    const productfetch=productdetail.find(x=>x._id==productId);

     //validate the user info
    if(!userId){res.send("userid is require"); return }
    else if(userfetch==undefined){ res.send("userid is not valid"); return } 

    //validate the product info
    else if(!productId){res.send("productid is require");return }
    else if (productfetch==undefined){res.send("Product id is not valid"); return}
    else if(userfetch.balance>=productfetch.price){
         data.amount=productfetch.price
       let   total=userfetch.balance-data.amount
     let updatebalance= await userModel.findOneAndUpdate({_id:userId},{$set:{balance:total}},{new:true})
    let savedData = await OrderModel.create(data)
    res.send({data: savedData,upateduser:updatebalance})
    }
}

module.exports.createOrder= createOrder
