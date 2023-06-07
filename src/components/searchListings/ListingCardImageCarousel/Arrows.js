import React from "react";
import arrowLeft from "../../../assets/Rental Listing Page - Icons/Listing Arrow Left.png";
import arrowRight from "../../../assets/Rental Listing Page - Icons/Listing Arrow Right.png";
import "./Slider.scss";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        <img src={arrowLeft} alt="arrow left" />
      </span>
      <span className="next" onClick={nextSlide}>
        <img src={arrowRight} alt="arrow right" />
      </span>
    </div>
  );
}

export default Arrows;
