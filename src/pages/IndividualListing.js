import React from "react";
import {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import Header from "../components/IndividualListing/Header";
import GallerySection from "../components/IndividualListing/GallerySection";
import DataSectionTop  from "../components/IndividualListing/DataSectionTop";
import DataSectionMid from "../components/IndividualListing/DataSectionMid";
import DataSectionBot  from "../components/IndividualListing/DataSectionBot";
import GetInTouch from "../components/IndividualListing/GetInTouch";
import Footer from '../components/homePage/layout/Footer'; //Vidya's was more complete
import ListingService from "../services/FeedForListing";
import './IndividualListing.css'


const IndividualListing = () => {
  const {id} =useParams()
  const [listingData, setListingData] = useState(null)
  useEffect(() => {
    // console.log(id)    
    ListingService.getListing(id).then(res=>{
      // console.log(res)
      setListingData(res)
      // console.log(listingData.pricepw)
    })
  }, []); //empty arra



  
  return (
    <>      
            {listingData !== null && 
              <>
                <Header 
                    city={listingData?.city} 
                    address={listingData?.street_address} />  
                <GallerySection 
                    images={listingData?.images}/>      
                <div className="bottom_section" >
                  <div className="data_section">
                <DataSectionTop 
                    address={listingData?.street_address}  
                    rent={listingData?.price_pw}
                    building={listingData?.building_type}  
                    availability={listingData?.available}
                    moveInBond={listingData?.bond}                    
                    />
                <DataSectionMid
                    notesOnProperty={listingData?.description}/>
                <DataSectionBot
                    viewing1={listingData?.viewing_dates1}
                    viewing2={listingData?.viewing_dates2}
                    time1={listingData?.viewing_time1}
                    time2={listingData?.viewing_time2}
                    reference={listingData?._id}
                />
                  </div>
                <GetInTouch
                />
                </div>
                <Footer/>
              </>   
              }
            
    </>
    )}

export default IndividualListing;