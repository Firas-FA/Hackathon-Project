import React, { useState } from 'react'
import axios from "axios";

import "./AddContractSTyle.css"

function AddContract() {
  const [id_apartment, setId_apartment] = useState("66a3577e147e7242bfa522d1");
  const [id_user, setId_user] = useState("66a2d0219c8033c0301c0e04");
  const [user_name, setUser_name] = useState("");
  const [Rental_period, setRental_period] = useState("");
  const [total_rental, setTotal_rental] = useState("");
  const [responseMessage, setErrorMessage] = useState("");
  async function handleSignUp(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/contract/rentcontracts", {
        id_apartment: id_apartment,
        id_user: id_user,
        user_name: user_name,
        Rental_period: Rental_period,
        total_rental: total_rental,
      });

      setUser_name('')
      setRental_period('')
      setTotal_rental('')

      setErrorMessage(response.data.message);

      // response.status

    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "10%" }}>
      <form class="form" onSubmit={handleSignUp}>
        <p class="title">New Contract </p>

        <div class="flex">
          <label>
            <input class="input" type="text" placeholder="" value={id_apartment}
              onChange={(e) => {
                setId_apartment(e.target.value)
              }}
            />
            <span>Id apartment</span>
          </label>

          <label>
            <input class="input" type="text" placeholder="" value={user_name}
              onChange={(e) => {
                setUser_name(e.target.value)
              }}
            />
            <span>User Name</span>
          </label>
        </div>

        <label>
          <input class="input" type="date" placeholder="" value={Rental_period}
            onChange={(e) => {
              setRental_period(e.target.value)
            }}
          />
          <span>Rental Period</span>
        </label>
        <label>
          <input class="input" type="text" placeholder="" value={total_rental}
            onChange={(e) => {
              setTotal_rental(e.target.value)
            }}
          />
          <span>Total Rental</span>
        </label>

        <button class="submit">Add</button>
        <p>{responseMessage}</p>
      </form>
    </div>
  )
}

export default AddContract
