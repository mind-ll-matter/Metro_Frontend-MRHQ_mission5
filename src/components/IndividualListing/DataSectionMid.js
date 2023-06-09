import React from 'react';
// import DataMidStyle from './DataSectionMid.js';

const DataSectionMid = (props)=>{
  const {notesOnProperty}=props;  // names of properties I am senting it  
  return (
    <div>
      <h2>Property Details</h2>
      <p>{notesOnProperty}
      </p>
      <br/>      
      <h2>Property Features</h2>
      <div className="icons_bot"> {/* Mock Data, has to be replaced by JSON */}
        <h3>
          <img src="/images/solo-icons/Towel.png" alt="Towel Rack" className="property_features-icon"/> 
              Heated Towel Rack
        </h3>        
        <h3>
          <img src="/images/solo-icons/HomeAlarm.png" alt="Alarm" className="property_features-icon" /> 
          Home Alarm
        </h3>
        <h3><img src="/images/solo-icons/AirConditioner.png" alt="Air Conditioning" className="property_features-icon" /> Air Conditioning</h3>
      </div>
    </div>
  );
};

export default DataSectionMid;
