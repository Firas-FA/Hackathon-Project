// Import necessary modules and setup Express app and router
const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();


//? Import User model, Constants, and Controller functions
const User = require("../../Models/UserModel");

const { LOGIN_SUCCESS } = require("../../Constants/User/LoginMessages");
const {
  checkForMissingFields,
  checkEmailExistence,
  generateJwtToken,
} = require("../../Controllers/UserControllers/LoginController");

// Middleware setup
app.use(express.json());
app.use(cors());

// Login Route
router.post("/login",);

// Export router
module.exports = router;
