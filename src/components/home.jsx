import React from 'react';
import Abstract from '../assets/abstract.mp4';


const HomePage = () => {
  
  return (
    <div className="relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={Abstract} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Gaming wave</h1>
          <p className="text-lg">Find all trending games here</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

