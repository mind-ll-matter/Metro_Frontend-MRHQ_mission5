import React from 'react'

const KnowUs = () => {
    return (
        <div className="container max-w-[1200px] mx-auto px-4 my-16">
            <h2 className="text-3xl font-Roboto font-bold mb-4 text-center mt-12">Get to Know Us</h2>
            <div className='flex items-center justify-center'>
                <div className="flex items-center justify-center">
                    <div className="w-1/2 p-4">
                        <h2 className='text-2xl tracking-wide font-semibold font-Roboto'>No Fees</h2>
                        <p>Changing to Metro NZ properties is easy and there is no cost.
                            Even if it is for multiple properties. Complete the simple 
                            contact form or call us and we'll be in touch to transfer the
                            management properties to Metro NZ and to work with minimal 
                            disruption.
                            .</p>
                    </div>
                    <div className="w-1/2 p-4">
                        <h2 className='text-2xl tracking-wide font-semibold font-Roboto'>Community Involvement</h2>
                        <p>Metro NZ Property management has always been involved in the 
                            support of various charities, often rolling up our services
                             to deliver, feed, support or assist financially. If you have
                            any questions about what charities we have been involved in,
                             get in contact with us !
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <button className="flex mx-auto mt-10 text-white bg-[#E73336] border-0 py-2 shadow-lg px-8 focus:outline-none hover:bg-[#c42528] rounded text-lg">Contact Us</button>
            </div>
        </div>
    )
}

export default KnowUs
