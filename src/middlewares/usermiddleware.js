
const jwt = require("jsonwebtoken");

const mid1= async (req,res,next)=>{
    try{
    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    //If no token is present in the request header return error. This means the user is not logged in.
    if (!token)
    return res.status(400).send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    
    req.abc=decodedToken;

    if (!decodedToken)
      return res.status(401).send({ status: false, msg: "token is invalid" });
  
    next();
    }
    catch(error){
        res.status(500).send({msg:"somthing is wrong"})
    }  
}
const mid2=(req,res,next)=>{
  try{
  let userId = req.params.userId;
  if(req.abc.userId==userId)
  next();
  else
  return res.status(401).send("not authoriestion")
  }
  catch(error){
    res.status(500).send("somthing wrong in server")
  }
}
module.exports.mid1=mid1
module.exports.mid2=mid2