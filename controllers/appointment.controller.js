const Appointment = require("../models/appointment.model");
const Owner = require("../models/owner.model");

module.exports.createAppointment = async (req, res) => {
    try {
        const appointmentData = {
            vdehicleI: req.body.vehicleId,
            technicianId: req.body.technicianId,
            appointmentDate: req.body.appointmentDate,
            appointmentTime: req.body.appointmentTime,
            status: req.body.status
        }
        const response = await Appointment.create(appointmentData);
        if (response) {
            return res.status(200).json({
                message: "Appointment created succesfully",
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
module.exports.getAllAppointment = async (req, res) => {
    try {
        const response = await Appointment.find({});
        if (response) {
            return res.status(200).json({
                message: "Appointent fetched successfully",
                result: response,
                status: true
            });
        } else {
            return res.status(404).json({
                message: " Something went wrong!",
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
module.exports.getById = async (req, res) => {
    const appointmentId = req.params.id;
    console.log({ appointmentId })
    try {
        const response = await Appointment.findOne({ _id: appointmentId});
        if (response) {
            return res.status(200).json({
                message: " Appointment fetched successfully",
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
module.exports.updateAppintment = async (req, res) => {
    const appointmentId = req.params.id;
    console.log({ appointmentId })
    try {
        const appointmentData = {
            vdehicleI: req.body.vehicleId,
            technicianId: req.body.technicianId,
            appointmentDate: req.body.appointmentDate,
            appointmentTime: req.body.appointmentTime,
            status: req.body.status
        }
        const updateData = await Appointment.findOneAndUpdate(
            { _id: appointmentId },
            { $set: { ...req.body } },
            { new: true }
        );
        if (updateData) {
            return res.status(200).json({
                message: " Appointment updated successfully",
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
module.exports.deleteAppointment = async (req, res) => {
    const appointmentId = req.params.id;
    console.log({ appointmentIdId });
    try {
        const deletedData = await Appointment.findByIdAndDelete({ _id: appointmentId });
        if (deletedData) {
            return res.status(200).json({
                message: "Appointment deleted successfully",
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