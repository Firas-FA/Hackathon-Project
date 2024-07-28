//* Importing Packages
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

//? Creating Express router
const router = express.Router();

const User = require('../../Models/UserModel')
const Contract = require("../../Models/ContractModel");
const Apartment = require('../../Models/ApartmentModel')

//? Middlewares
app.use(express.json());
app.use(cors());



//? Route to create a new RentContract
router.post("/rentcontracts", async (req, res) => {
    try {
        const { id_apartment, id_user, user_name, Rental_period, total_rental, } = req.body;

        const apartment = await Apartment.findById(id_apartment);
        if (!apartment) {
            return res.status(400).json({ error: "Apartment not found" });
        }

        const user = await User.findById(id_user);
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        //? Create the new Contract
        const newContract = new Contract({
            id_apartment,
            id_user,
            user_name,
            Rental_period,
            total_rental,
        });

        //? Save the RentContract
        const contract = await newContract.save();

        res.status(201).json({ message: "Created successfully🔥" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//? Export router
module.exports = router;