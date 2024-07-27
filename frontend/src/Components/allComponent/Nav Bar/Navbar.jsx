import React from "react";

function Navbar() {
  return (
    <>
	  <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light p-0 m-0 fixed-top  "  id="ftco-navbar">
	    <div className="container p-0 mt-0">
	      <a className="navbar-brand p-0 m-0" href="index.html">
			{/* <img src="./assets/images/logo2.png" className="p-0 m-0" style={{width:'180px',height:'150px' ,top:'-40px',position:'relative'}} alt="" /> */}
			<h2 style={{color:"#5468ff",fontFamily:"cursive"}}>Your Estate</h2>
		  </a>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse " id="ftco-nav">
	        <ul className="navbar-nav ml-auto ">
	          <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
	          <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
	          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
	          <li className="nav-item"><a href="contact.html" className="nav-link">Log in</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    </>
  );
}

export default Navbar;
