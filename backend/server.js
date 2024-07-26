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
const Owner = require("./Models/OwnerModel")
const Apartment = require("./Models/ApartmentModel")

const userRegisterRoute = require("./Routers/UserRoutes/RegesterRoute");
const userLoginRoute = require("./Routers/UserRoutes/LoginRoute");
const getAllUserRoute = require('./Routers/UserRoutes/GetAllUsers')

const createOwnerRoute = require("./Routers/OwnerRouters/CreateOwnerRoute")
const getAllOwnerRoute = require("./Routers/OwnerRouters/GetAllOwnersRoute")

app.use(express.json());
app.use(cors());






app.use("/user", userRegisterRoute);
app.use("/user", userLoginRoute);
app.use("/user", getAllUserRoute)

app.use("/owner", createOwnerRoute)
app.use("/owner", getAllOwnerRoute)






// Route to create a new RentContract
app.post("/rentcontracts", async (req, res) => {
  try {
    const { id, id_apartment, user_name, Rental_period, total_rental } = req.body;

    // Ensure the referenced apartment exists
    const apartment = await Apartment.findById(id_apartment);
    if (!apartment) {
      return res.status(400).json({ error: "Apartment not found" });
    }

    // Create the new RentContract
    const newRentContract = new RentContract({
      id,
      id_apartment,
      user_name,
      Rental_period,
      total_rental,
    });

    // Save the RentContract
    const savedRentContract = await newRentContract.save();

    // Return the saved RentContract
    res.status(201).json(savedRentContract);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});




connectDB().then(() => {
  //? Starting the server after successful database connection
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
}
)

