import React from 'react';
// import DataTopStyle from './DataSectionTop.module.css'

function DataSectionTop (props){

  const {address, rent, building, availability, moveInBond}=props;  // names of properties I am senting it
  
  return (
    <>
      <div className="icons_top">
        <img src="/images/Heart.png" alt="Heart" className="listing_icon" />
        <img src="/images/Print.png" alt="Printer" className="listing_icon" />
        <img src="/images/Share Squared.png" alt="Share" className="listing_icon" />
      </div>      
      <h1>{address}</h1> 
      <h2>$ {rent} p/w</h2> 
      <div className="icons_mid" > 
        <img src="/images/Bedroom.png" alt="Bedroom" className="listing_icon" /> 1
        <img src="/images/Bathroom.png" alt="Bathroom" className="listing_icon" /> 1
        <img src="/images/Car Spaces.png" alt="Car Spaces" className="listing_icon" /> 1
      </div>
      <div className="p_details">
        Building type: {building}
        <br />
        <h2 style={{ paddingBottom: 40 }}>        
          Available Starting: {availability}
          <br />
          Bond: $ {moveInBond}         
        </h2>
      </div>
      <div className="location_map-div">
        <h2>Location on Map</h2>
        <img src="/Images/property-image-url/MapView.png" className="map_listing" alt="Property Map" />
        
      </div>
    </>
  );
};

export default DataSectionTop;