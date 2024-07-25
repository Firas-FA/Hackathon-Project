const validator = require("validator");


const Owner = require("../../Models/OwnerModel");

//* Importing Constants Messages
const {
  REQUIRED_FIELD_ERROR,
  INVALID_EMAIL,
  DUPLICATE_EMAIL,
  INVALID_PHONE_NUMBER
} = require("../../Constants/User/RegisterMessages");
//* Importing Constants Messages *\\

//? Create Functions To Validation 
async function validateFields(req) {
  const { ownerName, ownerEmail, ownerPhone } = req.body;
  if (!ownerName || !ownerEmail || !ownerPhone) {
    throw new Error(REQUIRED_FIELD_ERROR);
  }
}
async function validatePhoneNumber(req) {
  const { ownerPhone } = req.body;
  const syrianPhoneNumberRegex = /^09\d{8}$/;

  if (!syrianPhoneNumberRegex.test(ownerPhone)) {
    throw new Error(INVALID_PHONE_NUMBER);
  }
}

async function validateEmail(req) {
  const { ownerEmail } = req.body;
  if (!validator.isEmail(ownerEmail)) {
    throw new Error(INVALID_EMAIL);
  }
}

async function checkDuplicateEmail(req) {
  const { ownerEmail } = req.body;
  const existingOwner = await Owner.findOne({ ownerEmail });
  if (existingOwner) {
    throw new Error(DUPLICATE_EMAIL);
  }
}
//? Create Functions To Validation ؟\\

module.exports = {
  validateFields,
  validateEmail,
  validatePhoneNumber,
  checkDuplicateEmail,
};
