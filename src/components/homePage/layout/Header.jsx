import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx'

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        /* desktop navbar */
        <>
            <nav className='w-full bg-white shadow fixed top-0 z-10 hidden 800px:block'>
                <div className='w-11/12 mx-auto p-5'>
                    <div className=' hidden 800px:flex 800px:h-[50px] justify-between items-center '>
                        <div className='flex items-center'>
                            <div>
                                <Link href={"/"}>
                                    <img className='object-cover' width={160} height={120} src={"/assets/logo.png"} />
                                </Link>
                            </div>
                        </div>

                        <div className='flex items-center justify-center ml-5 space-x-4 text-[14px] font-[600] uppercase'>
                            <Link className={` text-black cursor-pointer tracking-wider`} to={"/"}>Home</Link>
                            <Link className={` text-black cursor-pointer tracking-wider`} to={"/"}>Services</Link>
                            <Link className={` text-black cursor-pointer tracking-wider`} to={"/"}>News</Link>
                            <Link className={` text-black cursor-pointer tracking-wider`} to={"/"}>About</Link>
                            <Link className={` text-black cursor-pointer tracking-wider`} to={"/"}>Contact Us</Link>
                            <Link className={` text-black cursor-pointer`} to={"/"}>
                                <button
                                    type="button"
                                    className="inline-block rounded bg-[#E73336] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-[#d9282b] hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] tracking-wider">
                                    Sign In
                                </button>
                            </Link>

                        </div>

                    </div>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className='w-full h-[70px] fixed top-0 left-0 z-50 shadow-sm 800px:hidden px-3 bg-white'>
                <div className='w-full flex items-center justify-between'>
                    <div>
                        <img className='h-[80px] w-[100px] object-cover' src='/assets/logo.png' />
                    </div>
                    <div>
                        <BiMenuAltLeft onClick={() => setOpen(true)} size={35} />
                    </div>

                </div>

                {
                    open && <div className='fixed w-full bg-[#0000005f] z-20 h-full top-0 right-0 '>
                        <div className=' fixed w-[60%] bg-white top-0 right-0  h-screen z-10 overflow-y-scroll'>
                            <div className='flex justify-end p-4'>
                                <div>
                                    <RxCross1 onClick={() => setOpen(false)} className='cursor-pointer mr-3' size={25} />
                                </div>

                            </div>
                            <div className=' flex flex-col px-5 space-y-4 text-[14px] font-Roboto font-[600] uppercase'>
                                <Link className={` text-black cursor-pointer tracking-wider`} to={"/"}>Home</Link>
                                <Link className={` text-black cursor-pointer tracking-wider`} to={"/"}>Services</Link>
                                <Link className={` text-black cursor-pointer tracking-wider`} to={"/"}>News</Link>
                                <Link className={` text-black cursor-pointer tracking-wider`} to={"/"}>About</Link>
                                <Link className={` text-black cursor-pointer tracking-wider`} to={"/"}>Contact Us</Link>
                                <Link className={` text-black cursor-pointer`} to={"/"}>
                                    <button
                                        type="button"
                                        className="inline-block rounded bg-[#E73336] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-[#d9282b] hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] tracking-wider">
                                        Sign In
                                    </button>
                                </Link>

                            </div>

                        </div>

                    </div>
                }

            </nav>
        </>

    )
}

export default Header
