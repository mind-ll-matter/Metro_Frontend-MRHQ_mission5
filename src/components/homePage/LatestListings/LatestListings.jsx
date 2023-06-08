//import React from 'react';

import property1 from '../../../assets/listings/property1.png'
import property2 from '../../../assets/listings/property2.png'
import property3 from '../../../assets/listings/property3.png'
import property4 from '../../../assets/listings/property4.png'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai'
const LatestListings = () => {
    return (
        <section className="text-black font-Roboto body-font px-5 ">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className=" text-3xl font-medium title-font font-Roboto mb-2 text-black text-left">Our Latest Listings</h1>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={property1} alt="content" />
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-3">511A Airedale Street</h2>
                            <h3 className="tracking-widest text-black text-xs font-medium title-font">Auckland CBD</h3>
                            <p className="tracking-widest text-black text-xs font-medium title-font">$500 p/w</p>

                            <p className="tracking-widest text-black text-xs font-medium title-font">1 bedroom, 1 bathroom</p>
                            <Link className='flex items-center mt-3' to="/">
                                <p className='text-black tracking-wider font-semibold font-Roboto'>More Info</p>
                                <AiOutlineArrowRight className='ml-3' size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={property2} alt="content" />
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-3">20/123 Owens Road</h2>
                            <h3 className="tracking-widest text-black text-xs font-medium title-font">Epsom, Aucklandt</h3>
                            <p className="tracking-widest text-black text-xs font-medium title-font">$600 p/w</p>

                            <p className="tracking-widest text-black text-xs font-medium title-font">2 bedrooms, 1 bathrooms, 3 carparkings</p>
                            <Link className='flex items-center mt-3' to="/">
                                <p className='text-black tracking-wider font-semibold font-Roboto'>More Info</p>
                                <AiOutlineArrowRight className='ml-3' size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={property3} alt="content" />
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-3">7C/34 kingston Street</h2>
                            <h3 className="tracking-widest text-black text-xs font-medium title-font">Auckland CBD</h3>
                            <p className="tracking-widest text-black text-xs font-medium title-font">$470 p/w</p>

                            <p className="tracking-widest text-black text-xs font-medium title-font">2 bedrooms, 1 bathrooms</p>
                            <Link className='flex items-center mt-3' to="/">
                                <p className='text-black tracking-wider font-semibold font-Roboto'>More Info</p>
                                <AiOutlineArrowRight className='ml-3' size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={property4} alt="content" />
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-3">807/5 Howe Street</h2>
                            <h3 className="tracking-widest text-black text-xs font-medium title-font">Freemans Bay</h3>
                            <p className="tracking-widest text-black text-xs font-medium title-font">$950 p/w</p>

                            <p className="tracking-widest text-black text-xs font-medium title-font">5 bedrooms, 3 bathrooms, 3 parking</p>
                            <Link className='flex items-center mt-3' to="/">
                                <p className='text-black tracking-wider font-semibold font-Roboto'>
                                More Info</p>
                                <AiOutlineArrowRight className='ml-3' size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="/search">
                    <button className="flex mx-auto mt-16 text-white bg-[#E73336] border-0 py-2 px-8 focus:outline-none shadow-lg hover:bg-[#d03335] rounded text-lg">See More</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default LatestListings
