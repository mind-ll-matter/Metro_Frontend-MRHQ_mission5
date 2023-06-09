import React from 'react';

function Footer() {
  return (
    <>
      <div className="viewings">
        <h2>Open Viewing Dates</h2>
        <div className="viewing_dates-div">
          <div>
            <h3>Saturday 3 June</h3>
            <h4>2:00 PM - 3:00 PM</h4>
          </div>
          <button className="add2plan">Add to my plan</button>
        </div>
        <br />
        <div className="viewing_dates-div">
          <div>
            <h3>Sunday 4 June</h3>
            <h4>2:00 PM - 3:00 PM</h4>
          </div>
          <button className="add2plan">Add to my plan</button>
        </div>
        <br />
        <p>Unable to make these dates?</p>
        <br />
        <button className="viewing_request-btn">Request a viewing</button>
      </div>
      Listing #4155856125
      <br />
      <a href="#" className="report_listing-link">Report this listing</a>
    </>
  );
};

export default Footer;
