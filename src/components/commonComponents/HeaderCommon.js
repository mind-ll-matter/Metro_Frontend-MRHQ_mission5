import React from "react";
import styles from "./HeaderCommon.module.scss";
import metroLogo from "../../assets/Header/metroLogo.png";

const HeaderCommon = () => {
  return (
    <div className={styles.headerCommon}>
      <div className={styles.leftSideHeader}>
        <a href="/">
          <img className={styles.metroLogo} src={metroLogo} alt="metro logo" />
        </a>
      </div>

      <div className={styles.rightSideHeader}>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.nav__li}>
              <a href="/" className={styles.nav__li__a}>
                Home
              </a>
            </li>
            <li className={styles.nav__li}>
              <a href="#" className={styles.nav__li__a}>
                Services
              </a>
            </li>
            <li className={styles.nav__li}>
              <a href="#" className={styles.nav__li__a}>
                News
              </a>
            </li>
            <li className={styles.nav__li}>
              <a href="#" className={styles.nav__li__a}>
                News
              </a>
            </li>
            <li className={styles.nav__li}>
              <a href="#" className={styles.nav__li__a}>
                About Us
              </a>
            </li>
            <li className={styles.nav__li}>
              <a href="#" className={styles.nav__li__a}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button className={styles.signin}>Sign in</button>
      </div>
    </div>
  );
};

export default HeaderCommon;
