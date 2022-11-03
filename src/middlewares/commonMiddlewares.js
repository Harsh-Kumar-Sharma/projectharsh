

const myOtherMiddleware = function(req, res, next){
    header=req.headers["isfreeappuser"];
    const isFreeAppUser= header=="true"?true:false
   console.log(isFreeAppUser)
    if(isFreeAppUser){
        next();       
}
else
{
   res.send("header is not found")
}  
}

module.exports.myOtherMiddleware = myOtherMiddleware
