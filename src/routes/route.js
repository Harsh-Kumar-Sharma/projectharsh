const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const abc = require('../util/helper')
const valid = require('../validator/formatter')
//importing external package
const underscore = require('underscore')
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    //problem 1
    console.log("about",xyz.wel());
    //problem 2
    console.log("information",abc.info());
    console.log("Date",abc.day);
    console.log("month",abc.month);
    //problem 3
    console.log("trim;-"+valid.trim+",Lowercase"+valid.lower+"Uppercase:-"+valid.upper);
    //problem 4
    let months=['Jan','Feb','Mar','Apr','Jun','Jul','Aug','Step','Oct','Nov','Dec']
    const rest=lodash.chunk(months,4)
     console.log("chunk method",rest);
     let arr=[1,3,5,7,9,11,13,15,17,19]
     const arr1=lodash.tail(arr)
     console.log("using tail method",arr1);
     let array=[12,2,4,4,5]
     const un=lodash.union(array)
     console.log("uniqe",un);
     let fo= [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    const fo1=lodash.fromPairs("frompair method using:-",fo)
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

