const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    vehicleId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "vehicle",
    },
    technicianId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Technician",
    },
    appointmentDate:{
        type:date,
        default:new Date()
    },
    appointmentTime:{
        type:date,
        default:new Date()
    },
    status:{
        type: String,
        require: true,
        enum: ['Scheduled', 'Completed', 'Cancelled','Pending'],
        default: "Scheduled"
    }, 
},{
    timetamps: true
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;