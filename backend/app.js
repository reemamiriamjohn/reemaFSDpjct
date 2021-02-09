const express = require('express');
const port = process.env.PORT || 3000;
const Productdata = require('./models/Productdata');
const Productdata2 = require('./models/Productdata2');
const cors = require('cors');
const jwt=require('jsonwebtoken')
var bodyparser=require('body-parser');
var app = new express();
// const ObjectId = require('mongoose').Types.ObjectId;
app.use(cors());
app.use(bodyparser.json());

 const mongoose = require('mongoose');
// var ObjectId = require('mongoose').Types.ObjectId;
mongoose.set('useFindAndModify', false);
const User = require('./models/user');

const db ="mongodb://localhost:27017/ration";
mongoose.connect(db,err=>{
    if(err){
        console.error('Error!' + err)
    }else{
        console.log('Connected to mongodb');
    }
});


app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    Productdata.find()
            .then(function(products){
                res.send(products);
            });
});


app.get('/products2',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    Productdata2.find()
            .then(function(products){
                res.send(products);
            });
});

app.post('/insert',function(req,res){
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var product = {
        
        // _id: req.body.product._id,
        productNo : req.body.product.productNo,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        price : req.body.product.price
       
    }
    var product = new Productdata(product);
    product.save();
});



app.post('/insert2',function(req,res){
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var product = {
        // _id2: req.body.product._id2,
        productNo2 : req.body.product.productNo2,
        productName2 : req.body.product.productName2,
        productCode2 : req.body.product.productCode2,
        price2 : req.body.product.price2
       
    }
    var product = new Productdata2(product);
    product.save();
});

app.put('/update/:id',(req,res)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log("HI"+req.body.product._id);
    // const id = ObjectId(req.body.product._id);
  
     const id = req.params.id;

    console.log(id);
    var product = {
        // _id: req.body.product._id,
        productNo : req.body.product.productNo,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        price : req.body.product.price
       
    }
    
    console.log(product);
    Productdata.findOneAndUpdate({ _id: id }, product ,{ new: true},(err,doc)=>{
       if(!err)
       {
           
        console.log(doc);
      }
     else{
         console.log(err);
      }
    });

 });

app.put('/update2/:id',(req,res)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log("HI"+req.body.product._id2);
    // const id = ObjectId(req.body.product._id);
    const id2 = req.params.id2;

    console.log(id2);
    var product = {
        // _id2: req.body.product._id2,
        productNo2 : req.body.product.productNo2,
        productName2 : req.body.product.productName2,
        productCode2 : req.body.product.productCode2,
        price2 : req.body.product.price2
       
    }
    console.log(product);

    Productdata2.findOneAndUpdate({ _id2: id2 }, product ,{ new: true},(err,doc)=>{
        if(!err){
            console.log(doc);
        }
        else{
            console.log(err);
        }
    });

});

app.delete('/delete/:id',(req,res)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log("hi");
    const id = req.params.id;
 
    console.log(id);
    
    Productdata.findOneAndDelete({_id:id},(err,doc)=>{
        if(!err){
            console.log("deleted"+doc);
        }
        else{
            console.log(err);
        }
});
});


app.delete('/delete2/:id',(req,res)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log("hi");
    const id2 = req.params.id2;
    console.log(id2);
    Productdata2.findOneAndDelete({_id2:id2},(err,doc)=>{
        if(!err){
            console.log("deleted"+doc);
        }
        else{
            console.log(err);
        }
});
});



app.post('/sign',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS")
     let userData= req.body;
     let user = new User(userData);
     user.save((err,userVerify)=>{
         if(err){console.log(err)}
         else{
            // let payload = {subject:user._id}
            // let token = jwt.sign(payload,'secretKey') 
            let token ="user"
            res.status(200).send({token})}

     })

     

})

app.post('/login',(req,res)=>{
    let userData =req.body;
    User.findOne({id: userData.id},(err,user)=>{
        if(err)
            {
                console.log(err);
            }
        else{
            if(!user)
                {
                    res.status(401).send('inavlid id')
                }
            else {
               if(user.password != userData.password)
                {
                    res.status(401).send('invalid password')
                }
            else{
               
                    // let payload = {subject:user._id}
                    // let token = jwt.sign(payload,'secretKey') 
                    let token = "user"
                    res.status(200).send({token})
                   
                }
               
            }
        }
    })


})


    app.listen(3000,function(){
        console.log('listening to port 3000');
    });