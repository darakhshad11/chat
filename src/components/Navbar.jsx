import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-gradient-to-r from-teal-600 to-teal-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              {/* <img 
                className="h-10 w-auto" 
                src={logo} 
                alt="CareForce One"
              /> */}
              <span className="ml-2 text-lg font-semibold text-white">CareForce One</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium ${location.pathname === '/' 
                ? 'text-white border-b-2 border-white' 
                : 'text-teal-100 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`px-3 py-2 text-sm font-medium ${location.pathname === '/services' 
                ? 'text-white border-b-2 border-white' 
                : 'text-teal-100 hover:text-white'}`}
            >
              Services
            </Link>
            <Link 
              to="/complaints" 
              className={`px-3 py-2 text-sm font-medium ${location.pathname === '/complaints' 
                ? 'text-white border-b-2 border-white' 
                : 'text-teal-100 hover:text-white'}`}
            >
              Complaints
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 text-sm font-medium ${location.pathname === '/contact' 
                ? 'text-white border-b-2 border-white' 
                : 'text-teal-100 hover:text-white'}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-100 hover:text-white hover:bg-teal-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-teal-700`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              location.pathname === '/'
                ? 'border-white bg-teal-600 text-white'
                : 'border-transparent text-teal-100 hover:bg-teal-600 hover:border-teal-300 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              location.pathname === '/services'
                ? 'border-white bg-teal-600 text-white'
                : 'border-transparent text-teal-100 hover:bg-teal-600 hover:border-teal-300 hover:text-white'
            }`}
          >
            Services
          </Link>
          <Link
            to="/complaints"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              location.pathname === '/complaints'
                ? 'border-white bg-teal-600 text-white'
                : 'border-transparent text-teal-100 hover:bg-teal-600 hover:border-teal-300 hover:text-white'
            }`}
          >
            Complaints
          </Link>
          <Link
            to="/contact"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              location.pathname === '/contact'
                ? 'border-white bg-teal-600 text-white'
                : 'border-transparent text-teal-100 hover:bg-teal-600 hover:border-teal-300 hover:text-white'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;