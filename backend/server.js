//* Importing Packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const axios = require('axios');
const userroute = require('./Routers/UserRoutes/authRoute')


const connectDB = require("./DB/Connection");

const app = express();
const apartmentrouter = require("./Routers/ApartmentRouters/appartment")
const filterapartmentroute = require('./Routers/ApartmentRouters/filterRouters')

const User = require("./Models/UserModel");
const Owner = require("./Models/OwnerModel")
const Apartment = require("./Models/ApartmentModel")

const userRegisterRoute = require("./Routers/UserRoutes/RegesterRoute");
const userLoginRoute = require("./Routers/UserRoutes/LoginRoute");
const getAllUserRoute = require('./Routers/UserRoutes/GetAllUsers')

const createOwnerRoute = require("./Routers/OwnerRouters/CreateOwnerRoute")
const getAllOwnerRoute = require("./Routers/OwnerRouters/GetAllOwnersRoute")

const createContractRoute = require('./Routers/ContractRoutes/CreateContractRoute')
const getAllContractsRoute = require('./Routers/ContractRoutes/getAllContracts')

app.use(express.json());
app.use(cors());



// app.use("/user", userRegisterRoute);
// app.use("/user", userLoginRoute);
// app.use("/user", getAllUserRoute)
app.use("/user", userroute)

app.use("/owner", createOwnerRoute)
app.use("/owner", getAllOwnerRoute)

app.use("/apartment", apartmentrouter)
app.use("/filter", filterapartmentroute)


app.use('/contract', createContractRoute)
app.use('/contract', getAllContractsRoute)


connectDB().then(() => {
  //? Starting the server after successful database connection
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
}
)





















