const mongoose = require("mongoose");

const technicianSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require:true
    },
    lastName:{
        type: String,
        require:true
    },
    specialty:{
        type: String,
        require:true
    },
    phoneNumber:{
        type: Number,
        require:true
    },
    email:{
        type: String,
        require:true
    },
},{
    timetamps: true   
});

const Technician = mongoose.model("Technician", technicianSchema);
module.exports = Technician;