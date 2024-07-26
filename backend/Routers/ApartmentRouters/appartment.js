const express = require('express');
const router = express.Router();
const apartmentController = require('../../Controllers/ApartmentController/apartmentController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/image/apartment'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });
const saveFiles = upload.array('pictures', 5); 

router.get('/welcome', apartmentController.wellcome);
router.post('/createApartment',saveFiles, apartmentController.createApartment);
router.get('/GetAllApartment', apartmentController.getAllApartments);
router.get('/getApartmentById/:id', apartmentController.getApartmentById);
router.put('/updateApartmentById/:id', apartmentController.updateApartmentById);
router.delete('/deleteApartmentById/:id', apartmentController.deleteApartmentById);

module.exports = router;