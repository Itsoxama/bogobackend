

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Package = new Schema({
    user_id:{
        type:String
    },
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    length:{
        type:Number,
    }
    ,
    type:{
        type:String,
    }
    ,
    height: {
        type: Number
    },
    width: {
        type: Number
    },
    weight:{
        type:Number,
    }
    ,
    value: {
        type: String
    },
    contents: {
        type: String
    },

    
});






const Packagemodel = mongoose.model('packageModel', Package);
module.exports =Packagemodel
  
