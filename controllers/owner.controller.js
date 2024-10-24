const Owner = require("../models/owner.model");

module.exports.createOwner = async (req, res) => {
    try{
        const ownerData = {
            firstName: req.body.firstName,
            lastNmae: req.body.lastName,
            phoneNumber:req.body.phoneNumber,
            email: req.body.email,
            address: req.body.address

        }
        const response = await Owner.create(ownerData);
        if (response){
            return res.status(201).json({
                message: "Owner created successfully",
                result: response,
                status: true
            })
        } else {
            return res.status(404).json({
                message: "Somthing went wrong!",
                status: false
            })
        }
    } catch (error) {
        return res.status(500).json({
            error: error,
            message: 'Internal server error',
            status: false
        })
    }   
}
module.exports.getAllOwner = async (req, res) => {
    try{
        const response = await Owner.find({});
        if (response) {
            return res.status(200).json({
                message: "Owner fetched successfully",
                result: response,
                status: true
            })
        } else {
            return res.status(404).json({
                message: "Something went wrong!",
                status: false            })
        }
    } catch (error) {
        return res.status(500).jsn ({
            message: "Internal server error",
            status: false
        })
    }
}
module.exports.getById = async (req,res) => {
    const ownerId = req.params.id
    console.log({ownerId})
    try {
        const response = await Owner.findOne({_id: ownerId});
        if (response) {
            return res.status(200).json({
                message: "Owner featched successfully",
                result: response,
                status: true
            })
        } else {
            return res.status(404).json({
                message:"Something went worng!",
                status: false
            })
        }
    } catch (error) {
        return res.status(500).json({
            error: error,
            message: "Internal server error",
            status: false
        })
    }
}
module.exports.updateOwner = async (req, res) => {
    const ownerId = req.params.id
    console.log({ownerId })
    try {
        const ownerData = {
            firstName: req.body.firstName,
            lastNmae: req.body.lastName,
            phoneNumber:req.body.phoneNumber,
            email: req.body.email,
            address: req.body.address
        }
        const updatedData = await Owner.findOneAndUpdate(
            { _id: ownerId },
            { $set: { ...req.body } },
            { new: true }
        );
        if (updatedData) {
            return res.status(200).json({
                message: "Owner updated successfully",
                result: updatedData,
                status: true
            })
        } else {
            return res.status(404).json({
                message: "Something went wrong!",
                status: false
            })
        }

    } catch (error) {
        return res.status(500).json({
            error: error,
            message: 'Internal server error',
            status: false
        })

    }
}
module.exports.deleteOwner = async (req, res) => {
    const ownerId = req.params.id
    console.log({ ownerId })
    try {

        const deletedData = await Owner.findByIdAndDelete({ _id: ownerId });
        if (deletedData) {
            return res.status(200).json({
                message: "Owner deleted successfully",
                status: true
            })
        } else {
            return res.status(404).json({
                message: "Something went wrong!",
                status: false
            })
        }

    } catch (error) {
        return res.status(500).json({
            error: error,
            message: 'Internal server error',
            status: false
        })

    }
}
