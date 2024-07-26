//* Importing Packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

//? Creating Express router
const router = express.Router();

//* Importing the Owner model
const Owner = require('../../Models/OwnerModel');

//? Middlewares
app.use(express.json());
app.use(cors());

//? Importing Constants Register Messages
const { SUCCESSFUL_REGISTRATION_MESSAGE } = require('../../Constants/User/RegisterMessages');

//? Importing Register Verification Functions
const {
    validateFields,
    validatePhoneNumber,
    validateEmail,
    checkDuplicateEmail
} = require('../../Controllers/OwnerControllers/CreateController');

//? Route to create an owner
router.post('/create', async (req, res) => {
    try {
        await validateFields(req);
        await validatePhoneNumber(req);
        await validateEmail(req);
        await checkDuplicateEmail(req);

        //? Create a new owner document
        const newOwner = new Owner({
            ownerName: req.body.ownerName,
            ownerEmail: req.body.ownerEmail,
            ownerPhone: req.body.ownerPhone,
        });

        //? Save the owner document to the database
        await newOwner.save();

        res.status(201).json({
            message: SUCCESSFUL_REGISTRATION_MESSAGE,

        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//? Exporting the router
module.exports = router;
