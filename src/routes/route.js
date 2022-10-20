const express = require('express');
const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]


router.post('/random', function(req, res) {
    let body = req.body
     const playeres=players.find(x=>x.name===body.name)
     if(playeres)
     {
        res.send({message:"Name is match"})
     }
     else{
        players.push(body);
    res.send(players);
     }
})

module.exports = router;