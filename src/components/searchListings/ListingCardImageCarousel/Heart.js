import React from "react";
import "./Slider.scss";
import likedEmpty from "../../../assets/Rental Listing Page - Icons/Liked - Empty.png";
import likedFilled from "../../../assets/Rental Listing Page - Icons/Liked - Filled.png";

const Heart = ({ fave, setFave }) => {
  const handleFaveChange = () => {
    setFave(!fave);
    console.log(fave);
  };
  return (
    <button
      className={`heartButton ${fave === true && "noShadow"}`}
      onClick={handleFaveChange}
    >
      <img
        // className={`heartImg ${fave === true && "noShadow"}`}
        className="heartImg"
        src={fave ? likedFilled : likedEmpty}
        alt=""
      />
    </button>
  );
};

export default Heart;
