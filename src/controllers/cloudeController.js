let axios = require("axios")



const getcloudedetails = async function (req, res) {



    let arr=["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"];
    try {
        
        
       
        const arr1=[]

      for(let i=0;i<arr.length;i++){
         
     
        let key = req.query.appid
        let a=arr[i]
         
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${key}`
        }

        let result = await axios(options)
            arr1.push({city:result.data.name,temp:result.data.main.temp})
    }
     
    arr1.sort((a,b)=>{return a.temp-b.temp});
       
        res.status(200).send({stauts:true, msg: arr1})
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}


module.exports.getcloudedetails=getcloudedetails