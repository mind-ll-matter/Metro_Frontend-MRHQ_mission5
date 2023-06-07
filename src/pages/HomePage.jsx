import React from 'react'
import Header from '../components/homePage/layout/Header'
import Footer from '../components/homePage/layout/Footer'
import HeroSection from '../components/homePage/Hero/Hero'
import Services from '../components/homePage/Services/Services'
import Properties from '../components/homePage/Properties/Properties'
import KnowUs from '../components/homePage/KnowUs/KnowUs'
import LatestListings from '../components/homePage/LatestListings/LatestListings'
import Award from '../components/homePage/Award/Award'

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Services />
            <Properties />
            <KnowUs />
            <LatestListings />
            <Award />
            <Footer />
        </div>
    )
}

export default HomePage
