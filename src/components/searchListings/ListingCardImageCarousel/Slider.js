import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./Slider.scss";
import Heart from "./Heart";

const len = sliderImage.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fave, setFave] = useState(false);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  //     }, 5000);
  //     return () => clearInterval(interval);
  //   }, [activeIndex]);
  // useEffect(() => {
  //   setFave(false);
  // }, []);

  return (
    <div className="slider-container">
      {/* <Heart favourite={fave} onclick={(fave) => setFave(!fave)} /> */}
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
