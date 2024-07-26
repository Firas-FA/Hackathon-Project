const { Schema, mongoose } = require("mongoose");

const contractSchema = new Schema(
    {
        id_apartment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Apartment",
            required: [true, "Apartment ID is required."]
        },
        user_name: {
            type: String,
            required: [true, "User name is required."],
            minlength: [3, "User name must be at least 3 characters long."],
            maxlength: [50, "User name cannot exceed 50 characters."]
        },
        Rental_period: {
            type: String,
            required: [true, "Rental period is required."],
            minlength: [5, "Rental period must be at least 5 characters long."],
            maxlength: [100, "Rental period cannot exceed 100 characters."]
        },
        total_rental: {
            type: Number,
            required: [true, "Total rental amount is required."],
            min: [1, "Total rental amount must be at least 1."]
        }
    },
    {
        timestamps: true
    }
);

const Contract = mongoose.model("Contract", contractSchema);

module.exports = Contract;
