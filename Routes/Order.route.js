// Importing important Orders
const express = require('express');
const app = express();
const Orderroute = express.Router();
let Order = require('../Models/Order');
var nodemailer = require('nodemailer');
var config=require('./Cosntants.config')




Orderroute.route('/add').post(function(req, res) {
try {
    if(
    
        req.body.headers.apikey&&
        req.body.headers.apisecret&&req.body.headers.apikey===config.apikey||req.body.headers.apisecret===config.apisecret){
        
        let Orders = new Order(req.body);
        Orders.save()
            .then(Order => {
                res.status(200).json({'Order': 'Order added successfully'});
            })
            .catch(err => {
              console.log("erer")
            });
    }else{
        res.status(400).json({'response':'Invalid Key or secret'});
    }
    
} catch (error) {
console.log('error')    
}
});


Orderroute.route('/find').post(function(req, res) {
    try {
        if(
            req.body.headers.apikey&&
            req.body.headers.apisecret&&req.body.headers.apikey===config.apikey||req.body.headers.apisecret===config.apisecret){
         
            Order.find(
                { user_id:req.body.user_id}, 
            
               function (error, success) {
                     if (error) {
                        res.send('error')
                     } else {
                        if(!success){
        
                            res.send('invalid')
                        }
                        else{
        
                            res.status(200).json({'Order':success});
                        }
                        
                     }
                 }
            
              
            )
                }
                else{
                    res.status(400).json({'response':'Invalid Key or secret'});
                }
    } catch (error) {
        console.log('error')
        
    }

    
});

Orderroute.route('/update').post(function(req, res) {
    Order.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            name:req.body.name,
            quantity:req.body.quantity,
            length:req.body.length,
            height:req.body.height,
            width:req.body.width,
            weight:req.body.weight,
            value:req.body.value,
            contents:req.body.contents



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Order':success});
                }
                
             }
         }
    
      
    )
    

    
});











module.exports = Orderroute;
