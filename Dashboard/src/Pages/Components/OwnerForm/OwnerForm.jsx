import React, { useState } from "react";
import axios from "axios";
import './OwnerForm.css'

const OwnerForm = () => {
    const [ownerName, setOwnerName] = useState("");
    const [ownerEmail, setOwnerEmail] = useState("");
    const [ownerPhone, setOwnerPhone] = useState("");
    const [responseMessage, setErrorMessage] = useState("");

    async function handleSignUp(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/owner/create", {
                ownerName: ownerName,
                ownerEmail: ownerEmail,
                ownerPhone: ownerPhone,
            });
            setOwnerName('')
            setOwnerEmail('')
            setOwnerPhone('')

            setErrorMessage(response.data.message);
// response.status

        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "10%" }}>
            <form className="form" onSubmit={handleSignUp}>
                <p className="title">New Owner </p>

                <label>
                    <input className="input" type="text" placeholder="" value={ownerName}
                        onChange={(e) => { setOwnerName(e.target.value) }}
                    />
                    <span>Name</span>
                </label>
                <label>
                    <input className="input" type="text" placeholder="" value={ownerEmail}
                        onChange={(e) => { setOwnerEmail(e.target.value) }}

                    />
                    <span>Email Address</span>
                </label>

                <label>
                    <input className="input" type="tel" placeholder="" value={ownerPhone}
                        onChange={(e) => { setOwnerPhone(e.target.value) }}

                    />
                    <span>Phone Number</span>
                </label>

                <button className="submit">Add</button>
                <p>{responseMessage}</p>
            </form>

        </div>
    );
}

export default OwnerForm;






