const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const port = process.env.PORT || 9002;

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


const vehicleRouter = require("./routes/vehicleRouter");
const ownerRouter = require("./routes/ownerRouter");
// const maintenanceRecord = require("./routes/maintenanceRouter");


app.use("/api/vehicle", vehicleRouter);
app.use("/api/owner",ownerRouter);
// app.use("/api/maintenanceRecord",maintenanceRecordRouter);

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});