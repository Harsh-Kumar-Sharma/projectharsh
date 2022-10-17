const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

//problem 1
router.get('/movies', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

    res.send(movies)
})
//problem 2
router.get('/movies/:index', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let index =req.params.index

    res.send(movies[index])
})
//problem 3
router.get('/movie/:index', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let index =req.params.index
    if(index<movies.length)
    return res.send(movies[index])
    else
    return res.send(" use a valid index")
})
//problem 4
router.get('/films', function (req, res){
    let movies = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
       
     res.send(movies)
})
//problem 5
router.get('/films/:filmid', function (req, res){
    let arr = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }];
        let count =0
       for(let i=0;i<arr.length;i++){
        if(arr[i].id==Number(req.params.filmid)){
            count++
            res.send(arr[i])
            }
       
    
       }
       if(count==0)
       res.send("id is not match")
})

// problem 6
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;