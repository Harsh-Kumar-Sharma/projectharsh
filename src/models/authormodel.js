const mongoose = require('mongoose');
const Authorschema= new mongoose.Schema({
    author_id:{
        type:Number,
        require:true
    },
    authorname:String,
    age:Number,
    address:String
},{timestamps:true});

module.exports = mongoose.model('Author', Authorschema)