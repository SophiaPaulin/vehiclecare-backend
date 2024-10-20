const Router = require("express").Router();
const vehicleController = require("../controllers/vehicle.controller");

Router.post("/create-vehicle", vehicleController.createVehicle);
Router.get("/getAllVehicle",vehicleController.getAllVehicle);
Router.get("/getById/:id",vehicleController.getById);
Router.put("/update/:id",vehicleController.updateVehicle);
Router.delete("/:id",vehicleController.deleteVehicle);

module.exports = Router;