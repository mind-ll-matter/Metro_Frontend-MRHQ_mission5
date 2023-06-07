import React from "react";
import "./Slider.scss";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="sliderContent">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
