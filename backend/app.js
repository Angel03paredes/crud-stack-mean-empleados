const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("./db");

const app = express();
const routesEmployees = require("./src/routes/employees.routes");
app.set("port",process.env.PORT || 3000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/employees",routesEmployees);

module.exports = app;