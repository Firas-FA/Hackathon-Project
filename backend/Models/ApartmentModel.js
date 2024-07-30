const mongoose = require("mongoose");

const apartmentSchema = mongoose.Schema(
  {
    apartmentPrice: {
      type: Number,
      required: [true, "Apartment price is required."],
      min: [1, "Apartment price must be at least 1."],
    },
    apartmentDescription: {
      type: String,
      required: [true, "Apartment description is required."],
      minlength: [10, "Apartment description must be at least 10 characters long."],
      maxlength: [1000, "Apartment description cannot exceed 1000 characters."],
    },
    apartmentLocation: {
      type: String,
      required: [true, "Apartment location is required."],
      minlength: [5, "Apartment location must be at least 5 characters long."],
      maxlength: [100, "Apartment location cannot exceed 100 characters."],
    },
    pictures: {
      type: Array,
      default: [],
    },
    apartmentArea: {
      type: String,
      required: [true, "Apartment area is required."],
      minlength: [2, "Apartment area must be at least 2 characters long."],
      maxlength: [50, "Apartment area cannot exceed 50 characters."],
    },
    countRoom: {
      type: Number,
      required: [true, "Number of rooms is required."],
      min: [1, "Number of rooms must be at least 1."],
    },
    floorHight: {
      type: Number,
      required: [true, "Floor height is required."],
      min: [1, "Floor height must be at least 1."],
    },
    blockNumber: {
      type: Number,
      required: [true, "Block number is required."],
    },
    ownerId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);



const Apartment = mongoose.model("Apartment", apartmentSchema);

module.exports = Apartment;