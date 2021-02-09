const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    id:Number,
    password:String,
    name:String,
    email:String,
    mob:Number,
    incum:Number


})

var User = mongoose.model('user',userSchema,'users');
module.exports = User;