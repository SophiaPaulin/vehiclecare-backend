const Router = require("express").Router();
const ownerController = require("../controllers/owner.controller");
const vehicleController = require("../controllers/vehicle.controller");

Router.post("/create", ownerController.createOwner);
Router.get("/getAllOwner",ownerController.getAllOwner);
Router.get("/getById", ownerController.getById);
Router.put("/update/:id",ownerController.updateOwner);
Router.delete("/id",ownerController.deleteOwner);

module.exports = Router;