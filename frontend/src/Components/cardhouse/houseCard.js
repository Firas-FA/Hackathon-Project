import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../cardhouse/houseCardStyle.css"

function HouseCard ({appartmentLocation,img,appartmentarea,countRoom,FloorHight,blockNumber,apartmentprice}) {
 const url="http://localhost:5000"
  return (
    <><div className="container">
            <div className="card custom-card">
                <img src={`http://localhost:5000/image/apartment/`+img} alt="" className="card-img-top custom-card-image"/>
                <div className="card-body">
                    <h5 className="card-title custom-card-title d-flex"><img width="30" height="30" src="https://img.icons8.com/cotton/64/location--v1.png" alt="location--v1"/> :  {appartmentLocation}</h5>
                    {/* <p className="card-text custom-card-detail">Block Number: {blockNumber}</p> */}
                    <p className="card-text custom-card-detail d-flex"><img width="30" height="30" src="https://img.icons8.com/pulsar-gradient/48/parking-and-2nd-floor.png" alt="parking-and-2nd-floor"/>:  {FloorHight}</p>
                    <div className="card-text custom-card-detail d-flex"><img width="30" height="30" src="https://img.icons8.com/ultraviolet/40/room.png" alt="room"/>:   {countRoom}</div>
                    <p className="card-text custom-card-detail d-flex"><img width="30" height="30" src="https://img.icons8.com/color/48/000000/price-tag-euro.png" alt="price-tag-euro"/>:  {apartmentprice}</p>
                    <p className="card-text custom-card-detail d-flex"><img width="30" height="30" src="https://img.icons8.com/fluency/48/000000/utah.png" alt="utah"/>  :  {appartmentarea}</p>
                    <Link className='btn btn-info custom-link' to="/details">Details</Link>
                </div>
            </div>
</div>
    </>
  )
}

export default HouseCard
