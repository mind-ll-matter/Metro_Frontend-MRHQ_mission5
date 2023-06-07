import React, { useState } from "react";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";
import MapButton from "./MapButton";
import styles from "./HeaderSearch.module.scss";

const HeaderSearch = () => {
  return (
    <div className={styles.headerSearch}>
      <SearchBar />
      <FilterButton />
      <MapButton />
    </div>
  );
};

export default HeaderSearch;
