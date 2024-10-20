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