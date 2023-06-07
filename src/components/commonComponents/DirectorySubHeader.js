import React from "react";
import styles from "./DirectorySubHeader.module.scss";
import arrow from "../../assets/Rental Listing Page - Icons/Drop down arrow.png";

const DirectorySubHeader = () => {
  return (
    <div className={styles.directorySubHeader}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.nav__li}>
              <a href="/" className={styles.nav__li__a}>
                Home
              </a>
            </li>
            <li>
              <img src={arrow} alt="arrow" />
            </li>
            <li className={styles.nav__li}>
              <a href="#" className={styles.nav__li__a}>
                Rental Properties
              </a>
            </li>
            <li>
              <img src={arrow} alt="arrow" />
            </li>
            <li className={styles.nav__li}>
              <a
                href="#"
                className={`${styles.nav__li__a} ${styles.currentPage}`}
              >
                Auckland
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DirectorySubHeader;
