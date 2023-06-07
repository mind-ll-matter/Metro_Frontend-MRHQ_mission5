import React from "react";
import likedEmpty from "../../../assets/Rental Listing Page - Icons/Liked - Empty.png";
import likedFilled from "../../../assets/Rental Listing Page - Icons/Liked - Filled.png";
import styles from "./Slider.scss";

const Heart = ({ fave, onclick }) => {
  return (
    <div className={styles.heart}>
      <span onClick={() => onclick(fave)}>
        <img
          src={`${fave ? likedFilled : likedEmpty}`}
          alt={`${fave ? "liked" : "ünliked"}`}
        />
      </span>
    </div>
  );
};

export default Heart;
