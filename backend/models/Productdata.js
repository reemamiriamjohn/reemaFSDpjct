const mongoose =require("mongoose");
mongoose.set('useUnifiedTopology',true);
mongoose.connect('mongodb://localhost:27017/ration',{useNewUrlParser:true});
const Schema= mongoose.Schema;


const ProductSchema = new Schema({
    // _id:String,
    productNo:String,
    productName:String,
    productCode:String,
    price: Number
   
})

var Productdata = mongoose.model('productdata', ProductSchema);

module.exports = Productdata;
