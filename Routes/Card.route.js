// Importing important Cards
const express = require('express');
const app = express();
const Cardroute = express.Router();
let Card = require('../Models/Cards');
var nodemailer = require('nodemailer');


var config=require('./Cosntants.config')





Cardroute.route('/update').post(function(req, res) {
    
if(
    req.body.headers.apikey&&
    req.body.headers.apisecret&&
    req.body.headers.apikey===config.apikey||req.body.headers.apisecret===config.apisecret){
    Card.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            name:req.body.name,
            cardnumber:req.body.cardnumber,
            cvv:req.body.cvv,
            expiry:req.body.expiry



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Card':success});
                }

                
             }
         }
    
      
    )
        }
    

        else{
            res.status(400).json({'response':'Invalid Key or secret'});
        }
});

Cardroute.route('/delete').post(function(req, res) {
    
    if(
        req.body.headers.apikey&&
        req.body.headers.apisecret&&
        req.body.headers.apikey===config.apikey||req.body.headers.apisecret===config.apisecret){
        Card.findByIdAndDelete(
            { _id:req.body._id}, 
    
                   
           function (error, success) {
                 if (error) {
                    res.send('error')
                 } else {
                    if(!success){
    
                        res.send('invalid')
                    }
                    else{
    
                        res.status(200).json({'Card':success});
                    }
                    
                 }
             }
        
          
        )
            }
        
    
            else{
                res.status(400).json({'response':'Invalid Key or secret'});
            }
    });

Cardroute.route('/add').post(function(req, res) {
  
    if(req.body.headers.apikey===config.apikey||req.body.headers.apisecret===config.apisecret){
  
    let Cards = new Card(req.body);
    Cards.save()
        .then(Card => {
            res.status(200).json({'Card': 'Card added successfully'});
        })
        .catch(err => {
          console.log("erer")
        });
    }
    
    else{
        res.status(400).json({'response':'Invalid Key or secret'});
    }
});


Cardroute.route('/find').post(function(req, res) {
    if(req.body.headers.apikey===config.apikey||req.body.headers.apisecret===config.apisecret){
  
    Card.find(
        { user_id:req.body._id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Card':success});
                }
                
             }
         }
    
      
    )
    
}
    
else{
    res.status(400).json({'response':'Invalid Key or secret'});
}
    
});











module.exports = Cardroute;
