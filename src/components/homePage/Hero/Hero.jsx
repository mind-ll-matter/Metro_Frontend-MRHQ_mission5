import React from "react";
import hero from '../../../assets/hero.jpg'

const HeroSection = () => {
    return (
        <div className="relative h-screen flex items-center px-20">
            {/* Background image */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-100"
                style={{
                    backgroundImage: `url(${hero})`,
                }}
            />

            {/* Card */}
            <div className="relative z-8 p-6 w-[480px] 800px:h-[380px] bg-white opacity-80 shadow-lg rounded-lg mt-20">
                <h1 className="text-4xl font-bold mb-4 font-Roboto tracking-normal">Metro NZ is one of the top Auckland Property Management Company.</h1>
                <p className="text-lg mb-8 tracking-wide">
                All of our staff are property investors who have expert 
                knowledge of the property market and your best interest in
                mind at all times. Check out our tailored services 
                </p>
                <div className="flex space-x-4">
                    <a href="/search">
                    <button className="px-6 py-3 bg-[#E3595b] text-white rounded hover:bg-[#E73336] uppercase font-Roboto font-bold">
                        Rental Properties
                    </button></a>
                    <button className="px-6 py-3 bg-[#E3595b] text-white rounded hover:bg-[#E73336] uppercase font-Roboto font-bold">
                        Property Owners
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
