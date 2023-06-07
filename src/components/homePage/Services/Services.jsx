import React from 'react';
import { BsHouseDown } from 'react-icons/bs';
import { GoChecklist } from 'react-icons/go';
import { GrBusinessService } from 'react-icons/gr';
import { AiOutlineHome } from 'react-icons/ai'
// import service1 from '../../assets/services/service1.png'
// import service2 from '../../assets/services/service2.png'
// import service3 from '../../assets/services/service3.png'
// import service4 from '../../assets/services/service4.png'
const Services = () => {
    return (
        <section className="text-[#1A1A1A] body-font w-11/12 mx-auto">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-3xl font-medium title-font text-semibold font-Roboto mb-4">We offer a range of services</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                </div>
                <div className='grid grid-cols-1 800px:grid-cols-2 gap-12 px-16'>
                    <div className='flex items-center justify-center flex-col space-y-3'>
                        <div>
                            <BsHouseDown size={50} />
                        </div>
                        <h1 className='text-xl font-semibold tracking-wide'>Free Property Apprasials</h1>
                        <p>We conduct a through appraisal of your
                            property that you want to put up for rent
                            based on the current rent market at that
                            moment
                    </p>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-3'>
                        <div>
                            <GoChecklist  size={50} />
                        </div>
                        <h1  className='text-xl font-semibold tracking-wide'>Our Property Listings</h1>
                        <p>If you are a landlord, this will give you a good
                            indication of the quality of properties that we
                            are currently under management with.
                        </p>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-3'>
                        <div>
                            <GrBusinessService size={50} />
                        </div>
                        <h1  className='text-xl font-semibold tracking-wide'>Toilored Services</h1>
                        <p>As point of diffrence we offer specialized
                            tailored services. Selling a tenanted property
                            can be a frustrating time for vendors,agent
                            and intent.
                        </p>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-3'>
                        <div>
                            <AiOutlineHome size={50} />
                        </div>
                        <h1  className='text-xl font-semibold tracking-wide'>Change to Metro NZ</h1>
                        <p>Changing to Metro NZ Property Management
                            is easy. We collect the required information
                            from you and in return. you'll see the benefits of working 
                            with a peoople-focussed company.</p>
                    </div>

                </div>

                <button className="flex mx-auto mt-16 shadow-lg text-white bg-[#E73336] border-0 py-2 px-8 focus:outline-none hover:bg-[#c42528] rounded text-lg">Learn More</button>
            </div>
        </section>
    )
}

export default Services
