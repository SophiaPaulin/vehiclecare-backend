const mongoose = require('mongoose');

const serviceDetailsSchema = new mongoose.Schema({
    maintenance_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Maintenance"
    },
    service_type_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service Type"
    },
    cost:{
        type:Number,
        require:true
    },
}, {
    timestamps: true
});

const ServiceDetails = mongoose.model("ServiceDetails", serviceDetailsSchema);
module.exports = ServiceDetails;
