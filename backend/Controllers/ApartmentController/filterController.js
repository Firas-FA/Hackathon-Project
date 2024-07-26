const Appartment=require('../../Models/ApartmentModel')
  // function is correct

const filteredApartmentsasarea=async (req, res) => {
    const { area } = req.query;
  
    try {
      const filteredApartments = await Appartment.find({ appartmentarea: area });
      res.json(filteredApartments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  // function is correct

  const filteraslocation=async (req, res) => {
    const { location } = req.query;
    
    try {
      const filteredApartments = await Appartment.find({ appartmentLocation: location });
      res.json(filteredApartments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  // function is correct
 const sortasprice= async (req, res) => {
    try {
      const filteredApartments = await Appartment.find().sort({ apartmentprice: 1 });
      res.json(filteredApartments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  // function is correct

  const filterascountroom = (req, res) => {
    Appartment.find().sort('-countRoom')
      .then((apartments) => {
        res.send(apartments);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
      });
  };
  // function is correct

  const filterasfloorhight = (req, res) => {
    Appartment.find().sort('-FloorHight')
      .then((apartments) => {
        res.send(apartments);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
      });
  };
  module.exports={filteredApartmentsasarea,filteraslocation,sortasprice,filterascountroom,filterasfloorhight}