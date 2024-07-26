const mongoose= require("mongoose");

const apartmentSchema = mongoose.Schema(
  {
    apartmentprice: {
      type: Number,
      required: [true, "Apartment price is required."],
      min: [1, "Apartment price must be at least 1."],
    },
    apartmentdescription: {
      type: String,
      required: [true, "Apartment description is required."],
      minlength: [10, "Apartment description must be at least 10 characters long."],
      maxlength: [1000, "Apartment description cannot exceed 1000 characters."],
    },
    appartmentLocation: {
      type: String,
      required: [true, "Apartment location is required."],
      minlength: [5, "Apartment location must be at least 5 characters long."],
      maxlength: [100, "Apartment location cannot exceed 100 characters."],
    },
    img: {
      type: Array,
      default: [],
    },
    appartmentarea: {
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
    FloorHight: {
      type: Number,
      required: [true, "Floor height is required."],
      min: [1, "Floor height must be at least 1."],
    },
    blockNumber:{
        type:Number,
        require:true

    }
    ,
    ownerid: {
      // type: mongoose.Schema.Types.ObjectId,
      type:String,
      // ref: "Owner",
    },
  },
  {
    timestamps: true,
  }
);


const Apartment = mongoose.model("Apartment", apartmentSchema);

module.exports = Apartment;