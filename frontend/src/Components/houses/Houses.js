import React, { useEffect, useState } from 'react'
import '../houses/HousesStyle.css'
import HouseCard from "../cardhouse/HouseCard"


function Houses() {

    const [houses, setHouses] = useState([])

    function getAllHouses() {
        fetch("http://localhost:5000/apartment/GetAllApartment")
            .then((res) => res.json())
            .then((data) => {
                setHouses(data)
            })
    }
    function getLocation() {
        fetch("http://localhost:5000/filter/location")
            .then((res) => res.json())
            .then((data) => setHouses(data))
    }
    function getArea() {
        fetch("http://localhost:5000/filter/filterarea")
            .then((res) => res.json())
            .then((data) => setHouses(data))
    }
    function getPrice() {
        fetch("http://localhost:5000/filter/sortasprice")
            .then((res) => res.json())
            .then((data) => setHouses(data))
    }
    function getNumber() {
        fetch("http://localhost:5000/filter/sortascountroom")
            .then((res) => res.json())
            .then((data) => setHouses(data))
    }
    function getHeight() {
        fetch("http://localhost:5000/filter/sortasfloorhight")
            .then((res) => res.json())
            .then((data) => setHouses(data))
    }
    useEffect(() => {
        getAllHouses();
        getLocation();
        getArea();
        getPrice();
        getNumber();
        getHeight();
    }, [])
    const housesListComponent = houses.map((house) => (
        <div key={house.id} className="col-md-4 mb-4">
            <HouseCard
                appartmentLocation={house.appartmentLocation}
                img={house.img}
                urlimg="./backend/public/image/apartment/"
                appartmentarea={house.appartmentarea}
                countRoom={house.countRoom}
                FloorHight={house.FloorHight}
                blockNumber={house.blockNumber}
                apartmentprice={house.apartmentprice}
            />
        </div>
    ));
    return (
        <>
            <div className="container">
                <div className="container container-filters mb-5">
                    <div className="row">
                        <div className="col">
                            <button className='button-filter' onClick={getAllHouses}> All</button>
                        </div>
                        {/* <div className="col">
                            <button className='button-filter' onClick={getLocation}>Location</button>
                        </div> */}
                        <div className="col">
                            <button className='button-filter' onClick={getArea}> Area</button>
                        </div>
                        <div className="col">
                            <button className='button-filter' onClick={getPrice}>Price</button>
                        </div>
                        <div className="col">
                            <button className='button-filter' onClick={getNumber}> countRoom</button>
                        </div>
                        <div className="col">
                            <button className='button-filter' onClick={getHeight}> FloorHight</button>
                        </div>
                    </div>
                </div>
                {/* {housesListComponent} */}
                <div className="container">
                    <div className="container container-filters mb-5">
                        {/* Filter buttons remain unchanged */}
                    </div>
                    <div className="row">{housesListComponent}</div>
                </div>
            </div>
        </>
    )
}

export default Houses
