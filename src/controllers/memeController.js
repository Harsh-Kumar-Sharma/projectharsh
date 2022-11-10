let axios = require("axios")



const get_memes = async function (req, res) {
    try {
        
        var options = {
            method: "get",
            url: "https://api.imgflip.com/get_memes"
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

const creatememe = async function (req, res) {
    try {
        let a =req.query.template_id;
        let b=req.query.text0;
        let c=req.query.text1;
        let d=req.query.username;
        let e=req.query.password;
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${a}&text0=${b}&text1=${c}&username=${d}&password=${e}`
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

module.exports.get_memes=get_memes
module.exports.creatememe=creatememe

