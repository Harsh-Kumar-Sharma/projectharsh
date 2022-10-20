const express = require('express');
const router = express.Router();

// QUERY vs PARAMS
// Params ( path params ):-  used to load different items/pages based on a variable value in url
// params variable name  is not visible in  the url


// QUERY params:-
//  use case: to make filters / searches
// variable name is visible in the url itself



let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
 router.post('/person',function(req,res){
 const age= req.query.age
 const volter= persons.filter(x=>x.age>age)
 for(let i=0;i<volter.length;i++)
 {
    volter[i].votingStatus=true
 }
 res.send(volter);
 })
module.exports = router;