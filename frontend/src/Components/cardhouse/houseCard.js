import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../cardhouse/houseCardStyle.css"

function HouseCard ({appartmentLocation,img,appartmentarea,countRoom,FloorHight,blockNumber,apartmentprice}) {
 
  return (
    <><div className="container">
            <div className="card custom-card">
                <img src={img} alt="" className="card-img-top custom-card-image"/>
                <div className="card-body">
                    <h5 className="card-title custom-card-title">Location: {appartmentLocation}</h5>
                    <p className="card-text custom-card-detail">Block Number: {blockNumber}</p>
                    <p className="card-text custom-card-detail">Floor Height: {FloorHight}</p>
                    <div className="card-text custom-card-detail d-flex"><img width="30" height="30" src="https://img.icons8.com/ultraviolet/40/room.png" alt="room"/>:   {countRoom}</div>
                    <p className="card-text custom-card-detail">Price: {apartmentprice}</p>
                    <p className="card-text custom-card-detail">Area: {appartmentarea}</p>
                    <Link className='btn btn-info custom-link' to="/details">Details</Link>
                </div>
            </div>
</div>

    </>
  )
}

export default HouseCard
