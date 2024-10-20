const mongoose = require("mongoose");

const  serviceCenterSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    }
},{
    timestamps: true
});

const ServiceCenter = mongoose.model("ServiceCenter", serviceCenterSchema);
module.exports = ServiceCenter;