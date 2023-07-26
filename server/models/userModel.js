const mongoose = require('mongoose');

//schema sdesign
const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:[true, 'name is required']
    },

    email:{
        type:String,
        required:[true, 'email is required ans should be unique'],
        unique:true,
    },

    passwords:{
        type: String,
        required:[true, 'passwords is required'],
    },
},{timestamps:true});

export userModel = mongoose.model('user',userSchema)
module.exports = userModel;