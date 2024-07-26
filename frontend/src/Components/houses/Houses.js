import React, { useEffect, useState } from 'react'
import '../houses/HousesStyle.css'

function Houses() {
    const [AllHouses, setAllHouses] = useState({})
    const [Location, setLocation] = useState({})
    const [Area, setArea] = useState({})
    const [Price, setPrice] = useState({})
    const [Number, setNumber] = useState({})
    const [Height, setHeight] = useState({})

    function getAllHouses() {
        fetch()
            .then((res) => res.json())
            .then((data) => setAllHouses(data))
    }
    function getLocation() {
        fetch()
            .then((res) => res.json())
            .then((data) => setLocation(data))
    }
    function getArea() {
        fetch()
            .then((res) => res.json())
            .then((data) => setArea(data))
    }
    function getPrice() {
        fetch()
            .then((res) => res.json())
            .then((data) => setPrice(data))
    }
    function getNumber() {
        fetch()
            .then((res) => res.json())
            .then((data) => setNumber(data))
    }
    function getHeight() {
        fetch()
            .then((res) => res.json())
            .then((data) => setHeight(data))
    }
    useEffect(() => {
        getAllHouses();
        getLocation();
        getArea();
        getPrice();
        getNumber();
        getHeight();
    }, [])
    return (
        <>
            <div className="container">
                <div className="container container-filters">
                    <div className="row">
                        <div className="col">
                            <button className='button-filter' onClick={getAllHouses}> All</button>
                        </div>
                        <div className="col">
                            <button className='button-filter' onClick={getLocation}>Location</button>
                        </div>
                        <div className="col">
                            <button className='button-filter' onClick={getArea}> Area</button>
                        </div>
                        <div className="col">
                            <button className='button-filter' onClick={getPrice}>Price</button>
                        </div>
                        <div className="col">
                            <button className='button-filter' onClick={getNumber}> numberBed</button>
                        </div>
                        <div className="col">
                            <button className='button-filter' onClick={getHeight}> height</button>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="row">
                {AllHouses.map((house) => {
                    return (
                        <div className='col-3' key={house.id}>
                            <houseCard house={house} />
                        </div>
                    )
                }
                )}
                {Location.map((location) => {
                    return (
                        <div className='col-3' key={location.id}>
                            <houseCard location={location} />
                        </div>
                    )
                }
                )}
                {Area.map((area) => {
                    return (
                        <div className='col-3' key={area.id}>
                            <houseCard area={area} />
                        </div>
                    )
                }
                )}
                {Price.map((price) => {
                    return (
                        <div className='col-3' key={price.id}>
                            <houseCard price={price} />
                        </div>
                    )
                }
                )}
                {Number.map((number) => {
                    return (
                        <div className='col-3' key={number.id}>
                            <houseCard number={number} />
                        </div>
                    )
                }
                )}
                {Height.map((height) => {
                    return (
                        <div className='col-3' key={height.id}>
                            <houseCard height={height} />
                        </div>
                    )
                }
                )}

            </div> */}

        </>
    )
}

export default Houses
