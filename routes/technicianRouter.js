const Router = require("express").Router();
const TechnicianController = require("../controllers/technician.controller");

Router.post("/create", technicianController.createTechnician);
Router.get("/getAllTechnician", technicianController.getAllTechnician);
Router.get("/getById/:id", technicianController.getById);
Router.put("/update/:id", technicianController.updateTechnician);
Router.delete("/:id", technicianController.deleteTechnician);


module.exports = Router;