const mongoose = require('mongoose');

const serviceTypeSchema = new mongoose.Schema({
    serviceName:{
        type:String,
        require:true
    },
    description:{
        type:Text
    }
},{
    timestamps: true
});

const ServiceType = mongoose.model("ServiceType", serviceTypeSchema);
module.exports = ServiceType;