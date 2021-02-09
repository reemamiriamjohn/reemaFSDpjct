const mongoose =require("mongoose");
mongoose.set('useUnifiedTopology',true);
mongoose.connect('mongodb://localhost:27017/ration',{useNewUrlParser:true});
const Schema= mongoose.Schema;


const ProductSchema = new Schema({
    // _id2:String,
    productNo2:String,
    productName2:String,
    productCode2:String,
    price2: Number
   
})

var Productdata2 = mongoose.model('productdata2', ProductSchema);

module.exports = Productdata2;