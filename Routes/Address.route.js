// Importing important Addresss
const express = require('express');
const app = express();
const Addressroute = express.Router();
let Address = require('../Models/Address');
var nodemailer = require('nodemailer');


var config=require('./Cosntants.config')





Addressroute.route('/update').post(function(req, res) {
    
if(
    req.body.headers.apikey&&
    req.body.headers.apisecret&&
    req.body.headers.apikey===config.apikey||req.body.headers.apisecret===config.apisecret){
    Address.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            addressname:req.body.addressname,
            fullname:req.body.fullname,



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Address':success});
                }
                
             }
         }
    
      
    )
        }
    

        else{
            res.status(400).json({'response':'Invalid Key or secret'});
        }
});

Addressroute.route('/delete').post(function(req, res) {
    
    if(
        req.body.headers.apikey&&
        req.body.headers.apisecret&&
        req.body.headers.apikey===config.apikey||req.body.headers.apisecret===config.apisecret){
        Address.findByIdAndDelete(
            { _id:req.body._id}, 
    
                   
           function (error, success) {
                 if (error) {
                    res.send('error')
                 } else {
                    if(!success){
    
                        res.send('invalid')
                    }
                    else{
    
                        res.status(200).json({'Address':success});
                    }
                    
                 }
             }
        
          
        )
            }
        
    
            else{
                res.status(400).json({'response':'Invalid Key or secret'});
            }
    });

Addressroute.route('/add').post(function(req, res) {
  
    if(req.body.headers.apikey===config.apikey||req.body.headers.apisecret===config.apisecret){
  
    let Addresss = new Address(req.body);
    Addresss.save()
        .then(Address => {
            res.status(200).json({'Address': 'Address added successfully'});
        })
        .catch(err => {
          console.log("erer")
        });
    }
    
    else{
        res.status(400).json({'response':'Invalid Key or secret'});
    }
});


Addressroute.route('/find').post(function(req, res) {
    if(req.body.headers.apikey===config.apikey||req.body.headers.apisecret===config.apisecret){
  
    Address.find(
        { user_id:req.body.user_id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Address':success});
                }
                
             }
         }
    
      
    )
    
}
    
else{
    res.status(400).json({'response':'Invalid Key or secret'});
}
    
});











module.exports = Addressroute;
