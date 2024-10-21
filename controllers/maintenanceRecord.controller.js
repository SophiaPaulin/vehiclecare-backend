const MaintenanceRecord = require("../models/maintenanceRecord.model");

module.exports.createMaintenanceRecord = async (req, res) => {
    try {
        const maintenanceRecordData = {
            vehicleId: req.body.vehicleId,
            serviceCenterId: req.body.serviceCenterId,
            serviceDate: req.body.serviceDate,
            description: req.body.description,
            mileageAtService: req.body.mileageAtService,
            totalCost: req.body.totalCost,
            nextServiceDue: req.body.nextServiceDue
        }
        const respones = await MaintenanceRecord.create(maintenanceRecordData);
        if (respones) {
            return res.status(201).json({
                message: "MaintenanceRecord created successfully",
                result: respones,
                status: true
            });
        } else {
            return res.status(404).json({
                message: "Something went wrong!",
                status: false
            });
          }
        } catch {
            return res.status(500).json({
                error: error,
                message: 'Internal server error',
                status: false    
            });
        }
    } 
module.exports.getAllMaintenanceRecord = async (req, res) => {
    try {
        const respones = await MaintenanceRecord.find({});
        if (respones) {
            returnres.status(200).json({
                message: "MaintenanceRecord fetched successfully",
                result: respones,
                status: true
            });
        } else {
            return res.status(404).json({
                message:" Something went wrong!",
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
}
module.exports.getById = async (req, res) => {
    const maintenanceRecordId = req.params.id 
    console.log({ maintenanceRecordId })
    try {
        const respones = await MaintenanceRecord.findOne({ _id: maintenanceRecordId});
        if (respones) {
            return res.status(201).json({
                message: "MaintenanceRecord fetched successfully",
                result: respones,
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
}
module.exports.updateMaintenanceRecord = async (req, res) => {
    const maintenanceRecordId = req.params.id
    console.log({ maintenanceRecordId })
    try {
        const maintenanceRecordData = {
            vehicleId: req.body.vehicleId,
            serviceCenterId: req.body.serviceCenterId,
            serviceDate: req.body.serviceDate,
            description: req.body.description,
            mileageAtService: req.body.mileageAtService,
            totalCost: req.body.totalCost,
            nextServiceDue: req.body.nextServiceDue
        }
        const updatedData = await MaintenanceRecord.findOneAndUpdate(
            { _Id: maintenanceRecordId },
            { $set: { ...req.body } },
            { new: true }
        );
        if (updatedData) {
            return res.status(200).json ({
                message: "MaintenanceRecord updated successfully",
                result: updatedData,
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
}
module.exports.deleteMaintenanceRecord = async (req, res) => {
    const maintenanceRecordId = req.params.id
    console.log({ maintenanceRecordId })
    try {

        const deletedData = await MaintenanceRecord.findByIdAndDelete({ _id: maintenanceRecordId });
        if (deletedData) {
            return res.status(200).json({
                message: "MaintenanceRecord deleted successfully",
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
}