// Import necessary modules and setup Express app and router
const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();


//? Import Owner model, Constants, and Controller functions
const Owner = require("../../Models/OwnerModel");

//? Middleware setup
app.use(express.json());
app.use(cors());

//? Route to get all Owner
router.get('/getAllOwners', async (req, res) => {
    try {
        const owners = await Owner.find();
        res.status(200).json(owners);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//? Export router
module.exports = router;
