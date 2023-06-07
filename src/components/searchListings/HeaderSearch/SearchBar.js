import React, { useState } from "react";
import styles from "./HeaderSearch.module.scss";
import searchIcon from "../../../assets/Rental Listing Page - Icons/Search.png";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  // if (searchInput.length > 0) {
  //   countries.filter((c) => {
  //     return c.name.match(searchInput);
  //   });
  // }
  return (
    <div className={styles.searchBar}>
      <form>
        <input
          type="text"
          placeholder="Search by suburb, postcode or city"
          onChange={handleChange}
        />
        <button className={styles.searchButton}>
          <img src={searchIcon} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
