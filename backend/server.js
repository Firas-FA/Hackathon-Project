//* Importing Packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const axios = require('axios');


const connectDB = require("./DB/Connection");

const app = express();


const User = require("./Models/UserModel");
const Owner = require("./Models/OwnerModel")

const userRegisterRoute = require("./Routers/UserRoutes/RegesterRoute");
const userLoginRoute = require("./Routers/UserRoutes/LoginRoute");
const getAllUserRoute = require('./Routers/UserRoutes/GetAllUsers')

const createOwnerRoute = require("./Routers/OwnerRouters/CreateOwnerRoute")
const getAllOwnerRoute = require("./Routers/OwnerRouters/GetAllOwnersRoute")
const apartmentrouters=require("./Routers/ApartmentRouters/appartment")
const filterRoute=require("./Routers/ApartmentRouters/filterRouters")
app.use(express.json());
app.use(cors());






app.use("/user", userRegisterRoute);
app.use("/user", userLoginRoute);
app.use("/user", getAllUserRoute)

app.use("/owner", createOwnerRoute)
app.use("/owner", getAllOwnerRoute)


app.use("/apartment", apartmentrouters);
app.use("/filter", filterRoute);



connectDB().then(() => {
  //? Starting the server after successful database connection
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
}
)

