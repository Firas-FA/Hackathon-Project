import React from "react";
import Header from "../../Components/allComponent/Header/Header";
import Navbar from "../../Components/allComponent/Nav Bar/Navbar";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
function LandingPage() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default LandingPage;
