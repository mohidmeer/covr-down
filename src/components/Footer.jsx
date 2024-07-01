import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/img/logo.png'

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='bg-[#161C2D] h-[300px] flex flex-col justify-center items-center text-white '>

        <div className='flex justify-between items-center gap-10'>
          <div>
            <h4>Ready to Manage your Employees</h4>
            <p className='mt-2'>Get news of your area and weather alert on your finger tips, Control your employees with geofencing feature.</p>
          </div>
          <Link className='btn'>
            Get Started Now
          </Link>

        </div>

      </div>
      <div className='p-10 bg-primary '>

        <div className='flex justify-between max-w-7xl mx-auto'>
          <Logo />
          <div className='grid grid-cols-3 gap-10'>

            <ul className='flex flex-col gap-4'>
              <p className='text-white'>Product </p>
              <li>
                <Link to="/features" className="nav-link text-white !font-light">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="nav-link text-white !font-light">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/news" className="nav-link text-white !font-light">
                  News
                </Link>
              </li>
              <li>
                <Link to="/helpdesk" className="nav-link text-white !font-light">
                  Help desk
                </Link>
              </li>
              <li>
                <Link to="/support" className="nav-link text-white !font-light">
                  Support
                </Link>
              </li>
            </ul>
            <ul className='flex flex-col gap-4'>
              <p className='text-white'>Services </p>
              <li>
                <Link to="/geo-fencing" className="nav-link text-white !font-light">
                  Geo Fencing
                </Link>
              </li>
              <li>
                <Link to="/social-media-feed" className="nav-link text-white !font-light">
                  Social Media Feed
                </Link>
              </li>
              <li>
                <Link to="/alerts" className="nav-link text-white !font-light">
                  Alerts
                </Link>
              </li>
              <li>
                <Link to="/news" className="nav-link text-white !font-light">
                  News
                </Link>
              </li>
              <li>
                <Link to="/weather" className="nav-link text-white !font-light">
                  Weather
                </Link>
              </li>
            </ul>
            <ul className='flex flex-col gap-4'>
              <p className='text-white'>Legal </p>
              <li>
                <Link to="/privacy-policy" className="nav-link text-white !font-light">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="nav-link text-white !font-light">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="nav-link text-white !font-light">
                  Return Policy
                </Link>
              </li>
            </ul>


          </div>



        </div>



      </div>





    </footer>
  )
}

export default Footer



function Logo() {
  return (
    <div className='flex flex-col gap-6 w-[300px] text-white '>

      <img src={logo} className='w-40' alt='' />

      <p className=' font-light'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>


      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full">
          <FaTwitter className=" text-2xl" />
        </div>
        <div className="w-10 h-10 flex items-center justify-center  rounded-full">
          <FaFacebook className=" text-2xl" />
        </div>
        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r  rounded-full">
          <FaInstagram className=" text-2xl" />
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full">
          <FaLinkedin className=" text-2xl" />
        </div>
      </div>

    </div>

  )
}