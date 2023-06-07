import React from "react";
import ListingCardImage from "./ListingCardImageCarousel/__ListingCardImage";
import Slider from "./ListingCardImageCarousel/Slider";
import ListingCardDescription from "./ListingCardDescription";
import styles from "./ListingCard.module.scss";

const ListingCard = () => {
  return (
    <div className={styles.listingCard}>
      {/* <ListingCardImage /> */}
      <Slider />
      <ListingCardDescription />
    </div>
  );
};

export default ListingCard;
