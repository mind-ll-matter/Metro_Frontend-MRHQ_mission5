import React from "react";
import bathroomIcon from "../../assets/Rental Listing Page - Icons/Bathroom.png";
import bedroomIcon from "../../assets/Rental Listing Page - Icons/Bedroom.png";
import parkingIcon from "../../assets/Rental Listing Page - Icons/Car Spaces.png";
import styles from "./ListingCard.module.scss";

const ListingCardDescription = () => {
  const desc = [
    {
      address: "511A Airedale Street",
      subrurbCity: "Auckland CBD",
      bedrooms: 1,
      bathrooms: 1,
      parking: 1,
      pricepw: 500,
      buildingType: "Apartment",
    },
  ];
  return (
    <div className={styles.listingCardDescription}>
      <p className={styles.address}>{`${desc[0].address}`}</p>
      <p className={styles.suburbCity}>{`${desc[0].subrurbCity}`}</p>
      <p className={styles.pricepw}>{`$${desc[0].pricepw} p/w`}</p>
      <div className={styles.descriptionBottom}>
        <div className={styles.bedCount}>
          <img src={bedroomIcon} />
          <p>{`${desc[0].bedrooms}`}</p>
        </div>
        <div className={styles.bathCount}>
          <img src={bathroomIcon} />
          <p>{`${desc[0].bathrooms}`}</p>
        </div>
        <div className={styles.parkingCount}>
          <img src={parkingIcon} />
          <p>{`${desc[0].parking}`}</p>
        </div>
        <p className={styles.buildingType}>{`${desc[0].buildingType}`}</p>
      </div>
    </div>
  );
};

export default ListingCardDescription;
