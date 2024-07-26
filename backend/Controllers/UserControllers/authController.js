const jwt = require("jsonwebtoken");
const validator = require("validator");
const User = require("../../Models/UserModel");
const {
  SUCCESSFUL_REGISTRATION_MESSAGE,
  REQUIRED_FIELD_ERROR,
  INVALID_EMAIL,
  DUPLICATE_EMAIL,
  INVALID_PHONE_NUMBER
  } = require("../../Constants/User/RegisterMessages");
//* Importing Constants Messages
 
  const test=(req,res)=>{
    console.log("test done in controller");
  }
const login= async (req, res) => {
    try {
      // Validate and process login credentials
      checkForMissingFields(req);
  
      const { userEmail, userPassword } = req.body;
      const existingUser = await checkEmailExistence(userEmail, userPassword);
  
      // Generate JWT token
      const userToken = await generateJwtToken(existingUser);
  
      res.cookie('userToken', userToken, {
        httpOnly: true,
      });
  
      // Respond with success message and token
      res.status(200).json({
        message: LOGIN_SUCCESS,
        userToken: userToken,
      });
    } catch (error) {
      // Handle errors
      res.status(400).json({
        error: error.message
      });
    }
  }


  
  const register= async (req, res) => {
    try {
      await validateFields(req);
      await validatePhoneNumber(req);
      await validateEmail(req);
      await checkDuplicateEmail(req);
  
      //? Creating new User Instance
      const newUser = new User({
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userPassword: req.body.userPassword,
        userPhone: req.body.userPhone
      });
  
      //? Saving the new user to the database
      await newUser.save();
  
      //? Generate JWT token
      const token = jwt.sign(
        { userId: newUser._id },
        process.env.JWT_SECRET,
        { expiresIn: '5d' } // Token expires in 5 days
      );
  
      //? Sending success response with token
      res.status(201).json({
        message: SUCCESSFUL_REGISTRATION_MESSAGE,
        userToken: token,
      });
    } catch (error) {
      let errorMessage = error.message;
      if (error.message === "User validation failed: userPassword: Password must be at least 6 characters long.") {
        errorMessage = "Password must be at least 6 characters long.";
      }
      res.status(400).json({ error: errorMessage });
    }
  }








//   -----------------------

async function validateFields(req) {
    const { userName, userEmail, userPassword, userPhone } = req.body;
    if (!userName || !userEmail || !userPassword || !userPhone) {
      throw new Error(REQUIRED_FIELD_ERROR);
    }
  }
  async function validatePhoneNumber(req) {
    const { userPhone } = req.body;
    const syrianPhoneNumberRegex = /^09\d{8}$/;
  
    if (!syrianPhoneNumberRegex.test(userPhone)) {
      throw new Error(INVALID_PHONE_NUMBER);
    }
  }
  
  async function validateEmail(req) {
    const { userEmail } = req.body;
    if (!validator.isEmail(userEmail)) {
      throw new Error(INVALID_EMAIL);
    }
  }
  
  async function checkDuplicateEmail(req) {
    const { userEmail } = req.body;
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      throw new Error(DUPLICATE_EMAIL);
    }
  }


  
//? Method to check for missing fields
const checkForMissingFields = (req) => {
    const { userEmail, userPassword } = req.body;
    if (!userEmail || !userPassword) {
      throw new Error(MISSING_FIELDS_ERROR);
    }
  };
  
  //? Method to check email existence
  const checkEmailExistence = async (userEmail, userPassword) => {
    const existingUser = await User.findOne({ userEmail });
    if (!existingUser || userEmail !== existingUser.userEmail) {
      throw new Error(LOGIN_ERROR);
    }
    if (existingUser.userPassword !== userPassword) {
      throw new Error(LOGIN_ERROR);
    }
    return existingUser;
  };
  
  //? Method to generate JWT token
  const generateJwtToken = async (user) => {
    try {
      return await jwt.sign(
        { userId: user._id, userEmail: user.userEmail },
        process.env.JWT_SECRET,
        { expiresIn: "5d" }
      );
    } catch (error) {
      throw new Error("Error generating JWT token");
    }
  };
//   --------------------
module.exports={login,register,test}