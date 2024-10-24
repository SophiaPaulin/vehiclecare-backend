const { response } = require("express");
const Technician = require("../models/technitian.model");
  
module.exports.createTechnician = async (req, res) => {
    try {
        const technicianData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            specialty: req.body.specialty,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email
        }
        const response = await Technician.create(technicianData);
        if (response) {
            return res.status(200).json({
                message: "Technician created successfully",
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
module.exports.getAllTechnician = async (req, res) => {
    try {
        const response = await Technician.find({});
        if (response) {
            return res.status(200).json({
                message: "Technician fetched successfully",
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
            message: "Internal server error",
            status: false
        });
    }
};
module.exports.getByID = async (req,res) => {
    const technicisnId = req.params.id 
    console.log({ technicianId })
    try {
        const response = await Technician.findOne({ _id: technicianId });
        if (response) {
            return res.status(200).json({
                message: "Technician fetched successfully",
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
            message: "Internal server error",
            status: false
        });
    }
};
module.exports.updateTechnician = async (req, res) => {
    const technicianId = req.params.id
    console.log({technicianId})
    try {
        const technicianData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            specialty: req.body.specialty,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email
        }
        const updatedData = await Technician.findOneAndUpdate(
            { _id: technicianId },
            { $set: { ...req.body }},
            { new: true }
        );
        if (updatedData) {
            return res.status(200).json({
                message: "Technician updated successfully",
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
            error:error,
            message: "Internal server error",
            status: false        
        });
    }
};
module.exports.deleteTechnician = async (req,res) => {
    const technicianId = req.params.id
    console.log({ technicianId })
    try {

        const deletedData = await Technician.findByIdAndDelete({ _id:technicianId });
        if (deletedData) {
            return res.status(200).json({
                message: "Technician deleted successfully",
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
            message: 'Internal server error',
            status: false
        });

    }
};

