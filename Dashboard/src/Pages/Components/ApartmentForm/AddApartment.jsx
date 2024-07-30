import React, { useState } from 'react';
import "./AddApartmentStyle.css";
import axios from "axios";

function AddApartment() {
  const [apartmentPrice, setApartmentPrice] = useState("");
  const [apartmentDescription, setApartmentDescription] = useState("");
  const [apartmentLocation, setApartmentLocation] = useState("");
  const [pictures, setPictures] = useState(null);
  const [apartmentArea, setApartmentArea] = useState("");
  const [countRoom, setCountRoom] = useState("");
  const [floorHight, setFloorHight] = useState("");
  const [blockNumber, setBlockNumber] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [responseMessage, setErrorMessage] = useState("");


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPictures(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("apartmentPrice", apartmentPrice);
      formData.append("apartmentDescription", apartmentDescription);
      formData.append("apartmentLocation", apartmentLocation);
      formData.append("pictures", pictures);
      formData.append("apartmentArea", apartmentArea);
      formData.append("countRoom", countRoom);
      formData.append("floorHight", floorHight);
      formData.append("blockNumber", blockNumber);
      formData.append("ownerId", ownerId);

      const response = await axios.post("http://localhost:5000/apartment/createApartment", formData);
      setErrorMessage(response.data.message);
      // Reset form fields after successful submission
      // setApartmentPrice("");
      // setApartmentDescription("");
      // setApartmentLocation("");
      // setPictures(null);
      // setApartmentArea("");
      // setCountRoom("");
      // setFloorHight("");
      // setBlockNumber("");
      // setOwnerId("");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "5%" }}>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">New Apartment</p>
        <p className="message">Enter your information</p>
        <div className="flex">
          <label>
            <input className="input" type="text" placeholder="" value={apartmentLocation} onChange={(e) => setApartmentLocation(e.target.value)} />
            <span>Apartment Location</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" value={apartmentArea} onChange={(e) => setApartmentArea(e.target.value)} />
            <span>Apartment Area</span>
          </label>
        </div>

        <label>
          <input className="input" type="file" placeholder="" onChange={handleFileChange} />
          <span>Apartment Picture</span>
        </label>

        <div className='flex'>
          <label>
            <input className="input" type="text" placeholder="" value={apartmentPrice} onChange={(e) => setApartmentPrice(e.target.value)} />
            <span>Apartment Price</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" value={floorHight} onChange={(e) => setFloorHight(e.target.value)} />
            <span>Floor Hight</span>
          </label>
        </div>
        <div className='flex'>
          <label>
            <input className="input" type="text" placeholder="" value={countRoom} onChange={(e) => setCountRoom(e.target.value)} />
            <span>Count Room</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" value={blockNumber} onChange={(e) => setBlockNumber(e.target.value)} />
            <span>Block Number</span>
          </label>
        </div>

        <label>
          <input className="input" type="text" placeholder="" value={ownerId} onChange={(e) => setOwnerId(e.target.value)} />
          <span>Owner ID</span>
        </label>

        <label>
          <span className='label'>Apartment Description</span>
          <input className="textarea" type='textarea' value={apartmentDescription} onChange={(e) => setApartmentDescription(e.target.value)} />
        </label>

        <button className="submit" type="submit">Add</button>
        <p style={{ textAlign: "center" }}>{responseMessage}</p>
      </form>
    </div>
  );
}

export default AddApartment;