

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Card = new Schema({
    user_id:{
        type:String
    },
    cardnumber: {
        type: String
    },
    cvv: {
        type: String
    },
        expiry: {
        type: String
    },
    name: {
        type: String
    },


    
});






const Cardmodel = mongoose.model('Cardmodel', Card);
module.exports =Cardmodel
  
