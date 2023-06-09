import React from "react";
import styles from "./NextResults.module.scss";

const NextResults = () => {
  return (
    <div className={styles.nextResults}>
      <div className={styles.pageSelectButtons}>
        <button className={styles.currentPage}>1</button>
        <button className={styles.notCurrentPage}>2</button>
        <button className={styles.notCurrentPage}>3</button>
        <button className={styles.notCurrentPage}>4</button>
        <p className={styles.threeDots}>...</p>
        <button className={styles.notCurrentPage}>10</button>
        <button className={styles.nextButton}>Next</button>
      </div>
      <p className={styles.nextResultsTotal}>1-12 of 58 results</p>
    </div>
  );
};

export default NextResults;
