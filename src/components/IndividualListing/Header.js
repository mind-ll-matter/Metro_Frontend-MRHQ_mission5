import React from 'react';
// import HeadStyle from './Header.module.css'

const  Header= (props) => {
  
   const {city,address}=props;  // names of properties I am senting it

  return (
    <>
    <div className="header">
      <div className="logo">
        <a href="#">
          <img
            src="/images/metroLogo.png"
            // I can't even...
            // \src\assets\Header\metroLogo.png
            // \src\components\IndividualListing\Header.js
            alt="MetroNZ logo"
          />
        </a>
      </div>
      <div className="navigation">
        <a href="#" className="navitem">Home</a>
        <a href="#" className="navitem">Services</a>
        <a href="#" className="navitem">News</a>
        <a href="#" className="navitem">About Us</a>
        <a href="#" className="navitem">Contact</a>
        <a href="#" className="signin">Sign in</a>
      </div>
    </div>
      <div className="returnbar">
        {/* Bar that in listings has the filters, here only 'return to Search' on Leftside */}
        <button className="return">
          ← Return to Search
        </button>
      </div>

      <section>
        {/* Contains the remainder (except footer) */}

        <div className="filteredpath">
          {/* Contains the filtered path all the way to the current property, you can click to a prev. filter */}
            <span>
              {/* replace with JSON dynamic call through ID */}
              Home
            </span>
            <span>
              {/* replace with JSON dynamic call through ID */}
              &gt;
            </span>
            <span>
              {/* replace with JSON dynamic call through ID */}
              Rental Properties
            </span>
            <span>
              {/* replace with JSON dynamic call through ID */}
              &gt;
            </span>
            <span>
              {/* replace with JSON dynamic call through ID */}
              {city}
            </span>
            <span>
              {/* replace with JSON dynamic call through ID */}
              &gt;
              </span>
            <span>
              {/* replace with JSON dynamic call through ID */}
              {address}
            </span>
        </div>
        {/* Other content within the main section goes here */}
      </section>

</>
  )}
export default Header;
