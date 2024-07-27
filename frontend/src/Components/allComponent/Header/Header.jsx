import React from "react";
import './HeaderStyle.css';
// import backgroundImage from './assets/images/bg_2.jpg';
// import bgImage from './assets/images/bg_2.jpg';

// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import SplideContent from './SplideContent';



function Header() {


  return (
   <>
     <div className="hero-wrap"   data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="overlay-2"></div>
      <div className="container">
        <div className="row  no-gutters slider-text justify-content-center align-items-center">
          <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-end">
          	<div className="text  text-center w-100 header-text">
	            <h1 className="mb-5 pb-4 " style={{fontSize:'45px'}}>Where elegance meets excellence,your<span style={{color:'#5468ff',fontFamily:"cursive"}}>Dream Home</span>awaits.</h1>
	            <p><a href="#" className="button-started py-3 px-4 ">Get Started</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="mouse">
				<a href="#" class="mouse-icon">
					<div class="mouse-wheel"><span class="ion-ios-arrow-round-down"></span></div>
				</a>
			</div>
    </div>
    {/* <img src={'./assets/images/bg_2.jpg'} alt="" /> */}
   </>
  );
}

export default Header;





// <div classNameName="bg-secondarybg" > 
// <div className=" ">
//   <Splide
//     options={{
//       perPage: 1,
//       autoplay: true,
//       type: "loop",
//       pagination: false,
//     }}
//     className=" flex justify-center"
//   >
//     {testiData.map((e) => {
//       return (
//         <>
//           <SplideSlide>
//             <SplideContent img={e.img} text={e.text} name={e.name} star={e.star}/>
//           </SplideSlide>
//         </>
//       );
//     })}
//   </Splide>
// </div>
// </div>