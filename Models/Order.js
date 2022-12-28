

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ordermod = new Schema({
    user_id:{
        type:String
    },
    ordernumber: {
        type: String
    },
    sendername: {
        type: String
    },
    senderlastname: {
        type: String
    },
    senderfirstname: {
        type: String
    },
    sendercountry: {
        type: String
    },
    status:{
        type:String
    },
    sendercity: {
        type: String
    },
    senderpostalcode: {
        type: String
    },

    
    senderstreet: {
        type: String
    },
    sendercomments: {
        type: String
    },


    recname: {
        type: String
    },
    reclastname: {
        type: String
    },
    recfirstname: {
        type: String
    },
    reccountry: {
        type: String
    },
    
    reccity: {
        type: String
    },
    recpostalcode: {
        type: String
    },

    
    recstreet: {
        type: String
    },
    reccomments: {
        type: String
    },
    email:{
        type:String
    },
    measure:[
        {
            pieces:{
                type:String
            },
            length:{
                type:String
            },
            width:{
                type:String
            },
            height:{
                type:String
            },
            weight:{
                type:String
            },
        }
    ]
    

    
});






const Ordermodel = mongoose.model('Ordermodel', Ordermod);
module.exports =Ordermodel
  
