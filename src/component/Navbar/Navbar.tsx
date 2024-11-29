"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#F7F7F7] shadow-md">
      {/* Navbar container */}
      < div className="flex items-center justify-between px-6 py-4 md:px-10">
      
        <div className="flex items-center gap-2">
          <div className="w-[32px] h-[32px] flex items-center">
       
          </div>
          <div className="flex items-center space-x-2 pt-5 pb-5">
          <Image src={"/Image/logo.svg"} alt="Logo" height={40} width={40} className="object-contain" />
          <h3 className="text-xl font-bold text-[#000000]">Ddsgnr</h3>
         
        </div>
        </div>
        <div/>
         {/* Icon for Mobile */}
        <button
          className="block md:hidden text-gray-600"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Nav  */}
        <div className="hidden md:flex items-center justify-between w-full ml-10">
          <ul className="flex gap-8 ml-auto">
            <li>
              <a href="#" className="hover:text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Achievement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Testimonial
              </a>
            </li>
          </ul>
          <div className="flex gap-4 ml-6">
            <button className="px-4 py-2 border border-gray-400 text-gray-600 rounded hover:bg-gray-200">
              Login
            </button>
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-[80px] left-0 w-full bg-[#F7F7F7] shadow-lg z-70">
          <ul className="flex flex-col items-start p-4 gap-4">
            {/* Mobile Header Content */}
            <div className="w-full border-b pb-8">
              <p className="text-sm">
                Phone Number: <span className="font-semibold">956 742 455 678</span>
              </p>
              <p className="text-sm mt-2">
                Email: <span className="font-semibold">info@ddsgnr.com</span>
              </p>
              
              <div className="flex gap-4 mt-4">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Mobile Navigation*/}
            <li>
              <a href="#" className="block py-2 hover:text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700">
                Achievement
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700">
                Testimonial
              </a>
            </li>

            {/* Mobile Buttons */}
            <div className="w-full flex flex-col gap-4 mt-4">
              <button className="w-full px-4 py-2 border border-gray-400 text-gray-600 rounded hover:bg-gray-200">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                Sign Up
              </button>
            </div>
          </ul>
        </nav>
      )}
    </div>
   
  );
};

export default Navbar;