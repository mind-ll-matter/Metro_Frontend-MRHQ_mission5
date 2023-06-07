import React, { useState } from "react";
import styles from "./HeaderSearch.module.scss";
import mapIcon from "../../../assets/Rental Listing Page - Icons/Map View.png";

const FilterButton = () => {
  return (
    <button className={styles.mapButton}>
      <img src={mapIcon} alt="filter" />
      <p>View Map</p>
    </button>
  );
};

export default FilterButton;
