import React, { useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import "./Slider.scss";
import Heart from "./Heart";

function Slider({ sliderImage, listingId }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fave, setFave] = useState(false);

  const len = sliderImage.length - 1;
  console.log("sliderImage is ", sliderImage);

  return (
    <div className="slider-container">
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
      <Heart listingId={listingId} fave={fave} setFave={setFave} />
    </div>
  );
}

export default Slider;
