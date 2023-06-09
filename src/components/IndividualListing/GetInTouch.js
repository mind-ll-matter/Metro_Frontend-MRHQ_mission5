import React from 'react';
// import GetInStyle from './GetInTouch.module.css'

function GetInTouch() {
  return (
    <div className="getintouch">
      <div className="contact">
        <h2>Get In Touch With Us</h2>
        <br />
        <img src="/images/solo-icons/Phone.png" className="property_features-icon" alt="Phone" />{' '}
        <a href="#" className="report_listing-link">
          +64 9 391 4642
        </a>
        <br />
        <br />
        <img src="/images/solo-icons/Email.png" className="property_features-icon" alt="Email" />{' '}
        <a href="#" className="report_listing-link">
          info@metronz.co.nz
        </a>
        <br />
        <br />
        <button className="contact_agent-btn">Contact an Agent</button>
      </div>
      <button className="apply_for_property-btn">Apply for this property</button>
    </div>
  );
};

export default GetInTouch;
