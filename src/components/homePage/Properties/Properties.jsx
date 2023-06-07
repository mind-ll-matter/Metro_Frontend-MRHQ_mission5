import React from 'react';
import './Propertites.css'

import property1 from '../../../assets/properties/p1.jpg'
import property2 from '../../../assets/properties/property2.jpeg'
import property3 from '../../../assets/properties/property3.jpg'
import property4 from '../../../assets/properties/property4.jpg'
import property5 from '../../../assets/properties/property5.jpg'
import property6 from '../../../assets/properties/property6.jpg'

const Properties = () => {
    return (
        <div className=' my-16'>

            <h1 className='text-center text-3xl font-bold text-black my-12 tracking-wider font-Roboto'>Everything covered for all your property needs</h1>
            <div className='flex  items-center justify-center'>
                <div className='grid grid-cols-1 800px:grid-cols-2 gap-5'>
                    <div className="relative h-[320px] w-[400px]">
                        <div
                            className="w-full h-full bg-cover bg-center transition-all duration-300 opacity-60"
                            style={{ backgroundImage: `url(${property1})` }}
                        >

                        </div>
                        <div className="absolute inset-0 bg-gray-500 bg-opacity-70 hover:bg-opacity-0 transition-all duration-300"></div>
                        <p className='text-xl font-Roboto font-semibold absolute bottom-4 right-3 text-white'>Property Management</p>
                    </div>
                    <div className="relative h-[320px] w-[400px]">
                        <div
                            className="w-full h-full bg-cover bg-center transition-all duration-300 opacity-70"
                            style={{ backgroundImage: `url(${property2})` }}
                        >

                        </div>
                        <div className="absolute inset-0 bg-gray-500 bg-opacity-70 hover:bg-opacity-0 transition-all duration-300"></div>
                        <p className='text-xl font-Roboto font-Roboto font-semibold absolute bottom-4 right-3 text-white'>Body Corporate Administration</p>
                    </div>
                    <div className="relative h-[320px] w-[400px]">
                        <div
                            className="w-full h-full bg-cover bg-center transition-all duration-300 opacity-70"
                            style={{ backgroundImage: `url(${property3})` }}
                        >

                        </div>
                        <div className="absolute inset-0 bg-gray-500 bg-opacity-70 hover:bg-opacity-0 transition-all duration-300"></div>
                        <p className='text-xl font-Roboto font-semibold absolute bottom-4 right-3 text-white'>Building Management</p>
                    </div>
                    <div className="relative h-[320px] w-[400px]">
                        <div
                            className="w-full h-full bg-cover bg-center transition-all duration-300 opacity-70"
                            style={{ backgroundImage: `url(${property4})` }}
                        >

                        </div>
                        <div className="absolute inset-0 bg-gray-500 bg-opacity-70 hover:bg-opacity-0 transition-all duration-300"></div>
                        <p className='text-xl font-Roboto font-semibold absolute bottom-4 right-3 text-white'>Home Decorating Services</p>
                    </div>
                    <div className="relative h-[320px] w-[400px]">
                        <div
                            className="w-full h-full bg-cover bg-center transition-all duration-300 opacity-70"
                            style={{ backgroundImage: `url(${property5})` }}
                        >

                        </div>
                        <div className="absolute inset-0 bg-gray-500 bg-opacity-70 hover:bg-opacity-0 transition-all duration-300"></div>
                        <p className='text-xl font-Roboto font-semibold absolute bottom-4 right-3 text-white'>Investment Properties</p>
                    </div>
                    <div className="relative h-[320px] w-[400px]">
                        <div
                            className="w-full h-full bg-cover bg-center transition-all duration-300 opacity-70"
                            style={{ backgroundImage: `url(${property6})` }}
                        >

                        </div>
                        <div className="absolute inset-0 bg-gray-500 bg-opacity-70 hover:bg-opacity-0 transition-all duration-300"></div>
                        <p className='text-xl font-semibold font-Roboto absolute bottom-4 right-3 text-white'>Rental Properties</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Properties
