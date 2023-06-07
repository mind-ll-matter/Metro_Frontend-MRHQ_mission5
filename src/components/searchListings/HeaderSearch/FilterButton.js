import React, { useState } from "react";
import styles from "./HeaderSearch.module.scss";
import filterIcon from "../../../assets/Rental Listing Page - Icons/Filter.png";

const FilterButton = () => {
  return (
    <button className={styles.filterButton}>
      <img src={filterIcon} alt="filter" />
      <p>Filter</p>
    </button>
  );
};

export default FilterButton;
