import React from "react";
import Slider from "./ListingCardImageCarousel/Slider";
import ListingCardDescription from "./ListingCardDescription";
import styles from "./ListingCard.module.scss";

const ListingCard = ({
  sliderImage,
  listingId,
  address,
  subrurbCity,
  bedrooms,
  bathrooms,
  parking,
  pricepw,
  buildingType,
}) => {
  return (
    <div className={styles.listingCard}>
      <Slider sliderImage={sliderImage} listingId={listingId} />
      <ListingCardDescription
        address={address}
        subrurbCity={subrurbCity}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
        parking={parking}
        pricepw={pricepw}
        buildingType={buildingType}
        listingId={listingId}
      />
    </div>
  );
};

export default ListingCard;
