// Import necessary modules and setup Express app and router
const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();


const Contract = require("../../Models/ContractModel");

//? Middleware setup
app.use(express.json());
app.use(cors());

//? Route to get all Owner
router.get('/getAllContracts', async (req, res) => {
    try {
        const contracts = await Contract.find();
        res.status(200).json(contracts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//? Export router
module.exports = router;
