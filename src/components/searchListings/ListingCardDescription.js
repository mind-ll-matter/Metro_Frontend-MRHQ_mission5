import React from "react";
import bathroomIcon from "../../assets/Rental Listing Page - Icons/Bathroom.png";
import bedroomIcon from "../../assets/Rental Listing Page - Icons/Bedroom.png";
import parkingIcon from "../../assets/Rental Listing Page - Icons/Car Spaces.png";
import styles from "./ListingCard.module.scss";

const ListingCardDescription = ({
  address,
  subrurbCity,
  bedrooms,
  bathrooms,
  parking,
  pricepw,
  buildingType,
}) => {
  return (
    <div className={styles.listingCardDescription}>
      <p className={styles.address}>{`${address}`}</p>
      <p className={styles.suburbCity}>{`${subrurbCity}`}</p>
      <p className={styles.pricepw}>{`$${pricepw} p/w`}</p>
      <div className={styles.descriptionBottom}>
        <div className={styles.bedCount}>
          <img src={bedroomIcon} />
          <p>{`${bedrooms}`}</p>
        </div>
        <div className={styles.bathCount}>
          <img src={bathroomIcon} />
          <p>{`${bathrooms}`}</p>
        </div>
        <div className={styles.parkingCount}>
          <img src={parkingIcon} />
          <p>{`${parking}`}</p>
        </div>
        <p className={styles.buildingType}>{`${buildingType}`}</p>
      </div>
    </div>
  );
};

export default ListingCardDescription;
