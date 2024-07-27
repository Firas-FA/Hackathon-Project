import React from "react";
import './SplideContentStyle.css'

function SplideContent({img,text,name,star}) {

  return (
    <>
    <div className="slide-content relative flex ">
      <img src={img} className="w-100 vh-100" alt="" />
      <div className="overlay flex my-auto text-white text-center absolute z-10 h-[100%] ">
        <div className="relative top-[50%]">
          <p className="fw-bold fs-3">Discover Your Dream Home Today.</p>
          <p>Transform Your Life with Our Expert Guidance</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default SplideContent;
