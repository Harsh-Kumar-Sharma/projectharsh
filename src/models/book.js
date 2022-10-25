const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    autherName: String,
    catager :  String,
    year   :  Number
}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema) 


