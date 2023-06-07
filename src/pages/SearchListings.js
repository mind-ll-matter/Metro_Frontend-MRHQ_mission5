import React from "react";
import HeaderCommon from "../components/commonComponents/HeaderCommon";
import HeaderSearch from "../components/searchListings/HeaderSearch/HeaderSearch";
import DirectorySubHeader from "../components/commonComponents/DirectorySubHeader";
import SortBy from "../components/searchListings/SortBy";
import ListingContainer from "../components/searchListings/ListingContainer";
import styles from "./SearchListings.module.scss";

const SearchListings = () => {
  return (
    <div>
      <div className="searchPageHeader">
        <HeaderCommon />
        <HeaderSearch />
        <DirectorySubHeader />
        <SortBy />
        <ListingContainer />
      </div>
    </div>
  );
};

export default SearchListings;
