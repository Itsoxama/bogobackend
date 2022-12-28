

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Address = new Schema({
    user_id:{
        type:String
    },
    addressname: {
        type: String
    },
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    number: {
        type: String
    },
    country: {
        type: String
    },
    
    value: {
        type: String
    },
    contents: {
        type: String
    },
    addresstype: {
        type: String
    },
     
    city: {
        type: String
    },
    street: {
        type: String
    },
    postalcode: {
        type: String
    },
    

    
});






const Addressmodel = mongoose.model('Addressmodel', Address);
module.exports =Addressmodel
  
