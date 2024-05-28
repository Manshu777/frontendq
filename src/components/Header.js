import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, suerName] = useState()


  useEffect(() => {

    let username = localStorage.getItem('id');

    if(username){
        setIsLoggedIn(true);
    }

  })

  const logouUser = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    window.location.href = '/login';
  }

  return (
    <nav className="bg-[#808836]">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
         
          <span className="text-white font-semibold text-xl">
              <Link to="/" className="text-whitepx-3 py-2 text-3xl rounded-md">i-mart</Link>
            </span>
          <div className="hidden lg:block">
            <div className="flex space-x-4">
              <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
              <Link to="/blog" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Blog</Link>
              {isLoggedIn ? (
             <>
             
               <Link className="text-white hover:bg-gray-700 px-3 py-2 rounded-md" onClick={logouUser}>
                 Logout
               </Link>

          
               <Link className="text-white hover:bg-gray-700 px-3 py-2 rounded-md" to='/cart' >
               <FaCartShopping/>
              </Link>
             
            
               <Link className="text-white hover:bg-gray-700 px-3 py-2 rounded-md" to="/profile" >
                 <i className="fas fa-user text-white"></i> Profile
               </Link>
        
             
           </>
            ) : (
              <>
               
                  <Link className="text-white hover:bg-gray-700 px-3 py-2 rounded-md " to="/contact">
                    Contact
                  </Link>
               
                  <Link className=" hover:bg-gray-700 px-3 py-2 rounded-md text-white " to="/login">
                    Login
                  </Link>
               
                  <Link className="text-white hover:bg-gray-700 px-3 py-2 rounded-md " to="/signup">
                    Signup
                  </Link>
               
              </>
            )}
            </div>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-white block px-3 py-2 rounded-md">Home</Link>
            <Link to="/about" className="text-white block px-3 py-2 rounded-md">About</Link>
            <Link to="/blog" className="text-white block px-3 py-2 rounded-md">Blog</Link>
            <Link to="/contact" className="text-white block px-3 py-2 rounded-md">Contact</Link>
            {isLoggedIn ? (
             <>
             
               <Link className="text-white hover:bg-gray-700 px-3 py-2 rounded-md" onClick={logouUser}>
                 Logout
               </Link>
             
            
               <Link className="text-white hover:bg-gray-700 px-3 py-2 rounded-md" to="/profile" >
                 <i className="fas fa-user text-white"></i> Profile
               </Link>
        
             
           </>
            ) : (
              <>
               
                  <Link className="text-white hover:bg-gray-700 px-3 py-2 rounded-md " to="/contact">
                    Contact
                  </Link>
               
                  <Link className=" hover:bg-gray-700 px-3 py-2 rounded-md text-white " to="/login">
                    Login
                  </Link>
               
                  <Link className="text-white hover:bg-gray-700 px-3 py-2 rounded-md " to="/signup">
                    Signup
                  </Link>
               
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
