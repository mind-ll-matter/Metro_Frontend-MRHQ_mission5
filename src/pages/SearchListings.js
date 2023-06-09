import React from "react";
import HeaderCommon from "../components/commonComponents/HeaderCommon";
import HeaderSearch from "../components/searchListings/HeaderSearch/HeaderSearch";
import DirectorySubHeader from "../components/commonComponents/DirectorySubHeader";
import SortBy from "../components/searchListings/SortBy";
import ListingContainer from "../components/searchListings/ListingContainer";
// import styles from "./SearchListings.module.scss";
import Footer from "../components/homePage/layout/Footer";
import NextResults from "../components/searchListings/NextResults";

const SearchListings = () => {
  return (
    <div>
      <HeaderCommon />
      <HeaderSearch />
      <DirectorySubHeader />
      <SortBy />
      <ListingContainer />
      <NextResults />
      <Footer />
    </div>
  );
};

export default SearchListings;
