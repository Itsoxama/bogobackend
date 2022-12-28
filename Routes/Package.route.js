// Importing important packages
const express = require('express');
const app = express();
const Packageroute = express.Router();
let Package = require('../Models/Package');
var nodemailer = require('nodemailer');

var config=require('./Cosntants.config')









Packageroute.route('/add').post(function(req, res) {

    if(req.body.headers.apikey===config.apikey||req.body.headers.apisecret===config.apisecret){
   
    let Packages = new Package(req.body);
    Packages.save()
        .then(Package => {
            res.status(200).json({'Package': 'Package added successfully'});
        })
        .catch(err => {
          console.log("erer")
        });
    }
    

    else{
        res.status(400).json({'response':'Invalid Key or secret'});
    }
});


Packageroute.route('/find').post(function(req, res) {
    
    if(req.body.headers.apikey===config.apikey||req.body.headers.apisecret===config.apisecret){
  
    Package.find(
        { user_id:req.body.user_id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Package':success});
                }
                
             }
         }
    
      
    )
    
}
    

else{
    res.status(400).json({'response':'Invalid Key or secret'});
}
    
});

Packageroute.route('/delete').post(function(req, res) {
    
    if(
        req.body.headers.apikey&&
        req.body.headers.apisecret&&
        req.body.headers.apikey===config.apikey||req.body.headers.apisecret===config.apisecret){
        Package.findByIdAndDelete(
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
Packageroute.route('/update').post(function(req, res) {
    
    if(req.body.headers.apikey===config.apikey||req.body.headers.apisecret===config.apisecret){
  
    Package.findByIdAndUpdate(
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

                    res.status(200).json({'Package':success});
                }
                
             }
         }
    
      
    )
        }
else{
    res.status(400).json({'response':'Invalid Key or secret'});
}

    
});











module.exports = Packageroute;
