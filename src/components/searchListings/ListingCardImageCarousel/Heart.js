import React from "react";
import styles from "./Slider.scss";
import { useEffect } from "react";
import likedEmpty from "../../../assets/Rental Listing Page - Icons/Liked - Empty.png";
import likedFilled from "../../../assets/Rental Listing Page - Icons/Liked - Filled.png";

const Heart = ({ fave, setFave }) => {
  const handleFaveChange = () => {
    setFave(!fave);
    console.log(fave);
  };
  return (
    <button className="heartButton" onClick={handleFaveChange}>
      <img
        className={`heartImg ${fave === true && "noShadow"}`}
        src={fave ? likedFilled : likedEmpty}
        alt=""
      />
    </button>
  );
};

export default Heart;
