import React from 'react';
import brand1 from '../../../assets/brands/brand1.png';
import brand2 from '../../../assets/brands/brand2.png';
import brand3 from '../../../assets/brands/brand3.png';
import brand4 from '../../../assets/brands/brand4.png';
import brand5 from '../../../assets/brands/brand5.png';


const Award = () => {
    return (
        <div className="container mx-auto px-5 my-12">
            <h2 className="text-2xl font-bold mb-4">Awards and Certifications</h2>
            <div className="flex flex-wrap justify-center">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
                    <img src={brand1} alt="Brand Logo" className="mx-auto" />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
                    <img src={brand2} alt="Brand Logo" className="mx-auto" />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
                    <img src={brand3} alt="Brand Logo" className="mx-auto" />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
                    <img src={brand4} alt="Brand Logo" className="mx-auto" />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
                    <img src={brand5} alt="Brand Logo" className="mx-auto" />
                </div>
                 {/* <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4">
                    <img src={brand6} alt="Brand Logo" className="mx-auto" />
                </div> */}
            </div>
        </div>
    )
}

export default Award
