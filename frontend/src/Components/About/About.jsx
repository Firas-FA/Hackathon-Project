import React from 'react'
import './AboutStyle.css'
import { FaCheck } from "react-icons/fa6";

function About() {
  return (
<>
<div id="about">
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-6"> <img src="./assets/images/3.jfif" className="img-responsive" alt=""/> </div>
      <div className="col-xs-12 col-md-6">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <h3>Why Choose Us?</h3>
          <div className="list-style row ">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <ul>
                <div className='d-flex '>
                    <span className='pt-1'><FaCheck /></span>
                    <li>Years of Experience</li>
                </div>
                <div className='d-flex '>
                    <span className='pt-1'><FaCheck /></span>
                    <li>Fully Insured</li>
                </div>
                <div className='d-flex '>
                    <span className='pt-1'><FaCheck /></span>
                    <li>100% Satisfaction Guarantee</li>
                </div>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12 ">
              <ul>
              <div className='d-flex '>
                    <span className='pt-1'><FaCheck /></span>
                    <li>Free Consultation</li>
                </div>
              <div className='d-flex '>
                    <span className='pt-1'><FaCheck /></span>
                    <li>Satisfied Customers</li>
                </div>
   
              <div className='d-flex '>
                    <span className='pt-1'><FaCheck /></span>
                    <li>Affordable Pricing</li>
                </div>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default About