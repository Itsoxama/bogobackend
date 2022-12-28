

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Usermodel = new Schema({
   
   
    name: {
        type: String
    },
    phone: {
        type: String
    },
    country:{
        type:String,
    }
    ,
    email: {
        type: String
    },
    password: {
        type: String
    },

    
});






const User = mongoose.model('Usermodel', Usermodel);
module.exports =User
  
