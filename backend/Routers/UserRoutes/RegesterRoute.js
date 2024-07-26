//* Importing Packages
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

//? Creating Express router
const router = express.Router();

//* Importing the User model
const User = require("../../Models/UserModel");

//? Middlewares
app.use(express.json());
app.use(cors());

//? Importing Constants Register Messages
const {
  SUCCESSFUL_REGISTRATION_MESSAGE,
} = require("../../Constants/User/RegisterMessages");

//? Importing Register Verification Functions
const {
  validateFields,
  validatePhoneNumber,
  validateEmail,
  checkDuplicateEmail,
} = require("../../Controllers/UserControllers/RegesteController");

//? Register Route
router.post("/register",);

//? Exporting the router
module.exports = router;
