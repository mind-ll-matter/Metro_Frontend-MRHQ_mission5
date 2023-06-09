import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import styles from "./ListingContainer.module.scss";

const ListingContainer = () => {
  const [listingsArray, setListingsArray] = useState([]);
  const [content, setContent] = useState(<></>);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((jsonRes) => {
        console.log("here is the jsonRes", jsonRes);
        addToListingArray(jsonRes);
      });
  }, []);

  function addToListingArray(listingsToAdd) {
    setListingsArray([...listingsArray, ...listingsToAdd]);
  }

  useEffect(() => {
    console.log("this is the final listingsArray", listingsArray);
    setContent(
      listingsArray.map((listing) => {
        return (
          <ListingCard
            sliderImage={listing.image_urls}
            listingId={listing._id}
            address={listing.street_address}
            subrurbCity={listing.suburb_city}
            bedrooms={listing.bedrooms}
            bathrooms={listing.bathrooms}
            parking={listing.carparks}
            pricepw={listing.pricepw}
            buildingType={listing.building_type}
          />
        );
      })
    );
  }, [listingsArray]);
  return <div className={styles.listingContainer}>{content}</div>;
};

export default ListingContainer;
