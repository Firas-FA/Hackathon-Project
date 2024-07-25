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

const userRegisterRoute = require("./Routers/UserRoutes/RegesterRoute");
const userLoginRoute = require("./Routers/UserRoutes/LoginRoute");


app.use(express.json());
app.use(cors());

app.use("", userRegisterRoute);

app.use("", userLoginRoute);


connectDB().then(() => {
  //? Starting the server after successful database connection
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
}
)

