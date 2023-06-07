import React from "react";
import styles from "./SortBy.module.scss";

const SortBy = () => {
  return (
    <div className={styles.sortBy}>
      <form>
        <label for="sort">Sort By:</label>
        <select id="cars" name="cars">
          <option value="featured">Featured</option>
          <option value="highest price">Highest Price</option>
          <option value="lowest price">Lowest Price</option>
          <option value="newest">Newest</option>
          <option value="earliest viewing">Earliest Viewing</option>
        </select>
      </form>
    </div>
  );
};

export default SortBy;
