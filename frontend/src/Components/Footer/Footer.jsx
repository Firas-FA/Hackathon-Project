import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import './FooterStyle.css'

function Footer() {
  return (
    <>
      <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <nav class="nav-footer">
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#">Home</a>
              </li>
              <li class="list-inline-item">
                <a href="#">About</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Property</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Blog</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div class="socials-a my-0 py-0">
            <ul class="list-inline my-0 py-0 ">
              <li class="">
                <a href="#">
                  <i><FaFacebookF /></i>
                </a>
              </li>
              <li class="">
                <a href="#">
                 <i> <FaWhatsapp /></i>
                </a>
              </li>
              <li class="">
                <a href="#"> 
                  <i><FaInstagram /></i>
                </a>
              </li>
              <li class="">
                <a href="#">
                  <i><MdOutlineEmail /></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="copyright-footer">
            <p class="copyright color-text-a">
              &copy; Copyright
              <span class="color-a">Your Estate</span> All Rights Reserved.
            </p>
          </div>
          {/* <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div> */}
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer