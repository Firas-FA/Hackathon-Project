import React from 'react'
import "./AddApartmentStyle.css"

function AddApartment() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "5%" }}>
            <form class="form">
                <p class="title">New Apartment </p>
                <p class="message">Enter your information </p>
                <div class="flex">
                    <label>
                        <input class="input" type="text" placeholder="" required="" />
                        <span>Location</span>
                    </label>

                    <label>
                        <input class="input" type="text" placeholder="" required="" />
                        <span>Area</span>
                    </label>
                </div>

                <label>
                    <input class="input" type="file" placeholder="" required="" />
                    <span>picture</span>
                </label>

                <label>
                    <input class="input" type="text" placeholder="" required="" />
                    <span>Floor Hight</span>
                </label>
                <label>
                    <input class="input" type="text" placeholder="" required="" />
                    <span>owner id</span>
                </label>
                <label>
                    <input class="input" type="text" placeholder="" required="" />
                    <span>countRoom</span>
                </label>
                <label>
                    <input class="input" type="text" placeholder="" required="" />
                    <span>block Number</span>
                </label>
                <button class="submit">Add</button>
            </form>
        </div>
    )
}

export default AddApartment
