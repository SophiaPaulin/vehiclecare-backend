const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    ownerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Owner"
    },
    model:{
        type:String,
        require:true
    },
    year:{
        type:Number,
        require:true
    },
    numberPlate:{
        type:String,
        require:true
    },
    color:{
        type:String,
        require:true
    },
    mileage:{
        type:Number,
        require:true
    },
    purchaseDate:{
        type:date,
        require:new Date()
    }
},{
    timestamps:true

});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;