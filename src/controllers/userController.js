const userModel = require("../models/userModel")

const createUser= async function (req, res) {
    let body = req.body
    let user = await userModel.create(body);
    let updatelogin=await userModel.updateOne({name:body.name},{isFreeAppUse:true},{new:true})
    res.send({sa:user,msg:updatelogin});
}
module.exports.createUser= createUser
