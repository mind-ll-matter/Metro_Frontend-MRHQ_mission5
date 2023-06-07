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
            <div className="relative z-8 p-6 w-[480px] 800px:h-[380px] bg-white opacity-80 shadow-lg rounded-lg mt-12">
                <h1 className="text-4xl font-bold mb-4 font-Roboto tracking-normal">Metro NZ is one of the top Auckland Property Management Company.</h1>
                <p className="text-lg mb-8 tracking-wide">
                All of our staff are property investors whohave expert 
                knowledge of the property market and your best interest in
                mind at all times. Check out our tailored services 
                </p>
                <div className="flex space-x-4">
                    <button className="px-6 py-3 bg-[#E73336] text-white rounded hover:bg-[#000000] uppercase font-Roboto font-bold">
                        Rental Properties
                    </button>
                    <button className="px-6 py-3 bg-[#E73336] text-white rounded hover:bg-[#000000] uppercase font-Roboto font-bold">
                        Property Owners
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
