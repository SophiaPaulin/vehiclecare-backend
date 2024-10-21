const { text } = require('body-parser');
const mongoose = require('mongoose');

const maintenanceRecordSchema = new mongoose.Schema({
    vehicleId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Vehicle"
    },
    serviceCenterId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Service Center"
    },
    serviceDate:{
        type: Date,
        default: new Date()
    },
    description:{
        type: String,
        require: true
    },
    mileageAtService:{
        type:String,
        require:true
    },
    totalCost:{
        type:Number,
        require:true
    },
    nextServiceDue:{
        type: Date,
        default: new Date()
    },
},{
    timestamps: true
});

const MaintenanceRecord = mongoose.model("MaintenanceRecord", maintenanceRecordSchema);
module.exports = MaintenanceRecord;