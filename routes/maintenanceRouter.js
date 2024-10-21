const Router = require("express").Router();
const maintenanceRecordController = require("../controllers/maintenanceRecord.controller");

Router.post("/create", maintenanceRecord.controller.createMaintenanceRecord);
Router.get("/getAllmaintenanceRecord", maintenanceRecord.controller.getAllMaintenanceRecord);
Router.get("/getById/:id", maintenanceRecord.controller.getById);
Router.put("/update/:id", maintenanceRecord.controller.updateMaintenanceRecord);
Router.delete("/:id", maintenanceRecord.controller.deleteMaintenanceRecord);

module.exports = Router;