const { Schema, mongoose } = require("mongoose");

//? Define Owner Schema
const ownerSchema = new Schema({
    ownerName: {
        type: String,
        required: [true, "Owner name is required."],
        trim: true,
        minlength: [3, "Owner name must be at least 3 characters long."],
        maxlength: [50, "Owner name cannot exceed 50 characters."],
    },
    ownerEmail: {
        type: String,
        required: [true, "Email is required."],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format."],
    },
    ownerPhone: {
        type: String,
        // unique: [true, "Phone number is required."],
        sparse: true,
        maxlength: [10, "Phone number cannot exceed 10 digits."],
        match: [/^09\d{8}$/, "Invalid Syrian phone number format. Phone number must start with 09 and be 10 digits long."],
    }
});

//? Create Owner models
const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
