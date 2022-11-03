const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const OrderSchema = new mongoose.Schema( {
	userId: {
        type:ObjectId,
        ref:"User1"
    },
	productId:{
        type:ObjectId,
        ref:"Product"
    },
	amount:Number,
	isFreeAppUser:{
        type:Boolean,
        default:false}, 
	date: {
        type:String,
        default: new Date()}
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema)
