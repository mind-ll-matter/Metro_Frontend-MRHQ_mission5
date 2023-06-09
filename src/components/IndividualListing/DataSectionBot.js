import React from 'react';
// import DataBotStyle from './DataSectionBot.module.css'

const  DataSectionBot=(props) =>{
  const {viewing1, viewing2, time1, time2, reference}=props;  // names of properties I am senting it
    return (
      <>
        <div className="viewings">
          <h2>Open Viewing Dates</h2>
          <div className="viewing_dates-div">
            <div>
              <h3>{viewing1}</h3>
              <h4>{time1}</h4>
            </div>
            <button className="add2plan">Add to my plan</button>
          </div>
          <br />
          <div className="viewing_dates-div">
            <div>
              <h3>{viewing2}</h3>
              <h4>{time2}</h4>
            </div>
            <button className="add2plan">Add to my plan</button>
          </div>
          <br />
          <p>Unable to make these dates?</p>
          <br />
          <button className="viewing_request-btn">Request a viewing</button>
        </div>
        Listing Reference #{reference}
        <br />
        <a href="#" className="report_listing-link">Report this listing</a>
      </>
    );
  };
  export default DataSectionBot