const Vehicle = require("../models/vehicle.model");
const Owner = require("../models/owner.model");
// const { response } = require("express");


module.exports.createVehicle = async (req, res) => {
    try {
        const vehicleData = {
            ownerId: req.body.ownerId,
            model: req.body.model,
            year: req.body.year,
            numberPlate: req.body.numberPlate,
            color: req.body.color,
            mileage: req.body.mileage,
            purchaseDate: req.body.purchaseDate
        };
        const response = await Vehicle.create(vehicleData);
        if (response) {
            return res.status(201).json({
                message: "Vehicle created successfully",
                result: response,
                status: true
            });
        } else {
            return res.status(404).json({
                message: "Something went wrong!",
                status: false
            });
        }
    } catch {error} {
        return res.status(500).json({
            error: error,
            message: "Internal server error",
            status: false
        });
    }
};
module.exports.getAllVehicle = async (req, res) => {
    try {
        const response = await Vehicle.findOne({});
        if (response) {
            return res.status(200).json({
                message: "Vehicle featched successfully",
                result: response,
                status: true
            });
        } else {
            return res.status(404).json({
                message: "Something went worng!",
                status: false
            });
        }
    } catch (error) {
        return res.status(500).json({
            error: error,
            message: "Internal server error",
            status: false
        });
    }
};
module.exports.getById = async (req,res) => {
    const vehicleId = req.params.id;
    console.log({ vehicleId });
    try {
        const response = await Vehicle.findOne({_id: vehicleId});
        if (response) {
            return res.status(200).json({
                message: "Vehicle fetched successfully",
                result: response,
                status: true
            });
        } else {
            return res.status(404).json({
                message: "Something went wrong!",
                status: false
            });  
        }
    } catch (error) {
        return res.status(500).json({
            error: error,
            message: " Internal server error",
            status: false
        });
    }
};
module.exports.updateVehicle = async (req, res) => {
    const vehicleId = req.params.id;
    console.log({ vehicleId });
    try {
        const VehicleData = {
            ownerId: req.body.ownerId,
            model: req.body.model,
            year: req.body.year,
            numberPlate: req.body.numberPlate,
            color: req.body.color,
            mileage: req.body.mileage,
            purchaseDate: req.body.purchaseDate
        };
        const updateData = await vehicleId.findOneUpdate(
            { _id: vehicleId },
            { $set: { ...req.body } },
            { new: true }
        );
        if (updatedDta) {
            return res.status(200).json({
                message: "Vehicle updated successfully",
                result: response,
                status: false
            });
        } else {
            return res.status(404).json({
                message: "Something went wrong!",
                status: false
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            status: false
        });
    }
};
module.exports.deleteVehicle = async (req, res) => {
    const vehicleId = req.params.id;
    console.log({ vehicleId });
    try {
        const deleteData = await Vehicle.findByIdAndDelete({ _id: vehicleId });
        if (deleteData) {
            return res.status(200).json({
                message: "Vehicle deleted succsessfully",
                status: true
            });
        } else {
            return res.status(404).json({
                message: "Somthing went wrong!",
                status: false            
            });
        }
    } catch (error) {
        return res.status(500).json({
            error: error,
            message: "Internal server error",
            status: false        
        });
    }
};
