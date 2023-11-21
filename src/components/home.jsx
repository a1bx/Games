import React, { useState } from 'react';
import Hero from '../assets/hero.jpg';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

  return (
    <div className="overflow-hidden">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white">
            <h1 className="text-xl text-white font-bold text-start">GHINIUD</h1>
          </div>          
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className="h-screen flex items-center justify-center text-white relative"
        style={{
          background: `url(${Hero}) center/cover no-repeat`,
        }}
      >
        <div className="container mx-auto p-4 relative">
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white p-2 w-full rounded"
          />
        </div>
        <h1 className="text-4xl font-bold z-10">Gaming Wave</h1>
          <p className='text-2xl font-semibold text-red-400' >
            Get all the info you need about your favorite games and streamers here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;