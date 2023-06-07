import React from 'react';
import { BsInstagram,  BsLinkedin, BsFacebook,BsYoutube,BsTwitter } from 'react-icons/bs';
import { RiLinkedinFill } from 'react-icons/ri';
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineFacebook } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#82888C] p-12 font-Roboto text-white'>
      <div>
        <div className="flex justify-end">
          <div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="mb-2 md:mb-0 md:mr-2 p-3 border border-gray-300 rounded focus:outline-none text-black"
            />
            <button
              type="button"
              className=" ml-3 800px:ml-0 inline-block rounded bg-[#E73336] px-8 pb-2 pt-2.5 text-xs font-medium font-Roboto uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-[#d9282b] hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] tracking-wider">
              Send
            </button>
          </div>
        </div>
      </div>
      <footer className="footer mt-12 border-t-[1px] border-b-[1px] p-8  text-white">
        <div>
          <span className=" !text-white footer-title ">Menu</span>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Tenants</a>
          <a className="link link-hover">News</a>
          <a className="link link-hover">Listings</a>
        </div>
        <div>
          <span className="footer-title">About Us</span>
          <a className="link link-hover">Management Team</a>
          <a className="link link-hover">Gallery</a>
          <a className="link link-hover">We're hiring</a>
          <a className="link link-hover">Dispute process</a>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <a className="link link-hover">09 391 4642</a>
          <a className="link link-hover">info@metronz.co.nz</a>
          {/* <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a> */}
        </div>
        <div>
          <div className='mb-3'>
            <p className='text-xs'>Level 33, ANZ centre, 23 29 Albert</p>
            <p className='text-xs'>Street, Auckland 1010, New zealand</p>
          </div>
          <div className="grid grid-flow-col gap-4">
            
            <Link to={"/"}><BsYoutube size={23} className='text-white font-semibold' /></Link>
            <Link to={"/"}><BsFacebook size={23} className='text-white font-semibold' /></Link>
            <Link to={"/"}><BsTwitter size={23} className='text-white font-semibold' /></Link>
            <Link to="/"><BsInstagram size={23} className='text-white font-semibold' /></Link>
            <Link to="/"><BsLinkedin size={23} className='text-white font-semibold' /></Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
