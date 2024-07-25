// Import necessary modules and setup Express app and router
const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();


//? Import User model, Constants, and Controller functions
const User = require("../../Models/UserModel");

//? Middleware setup
app.use(express.json());
app.use(cors());

//? Route to get all users
router.get('/getAllUsers', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
});

// Export router
module.exports = router;
