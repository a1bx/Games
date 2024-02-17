import React from 'react';
import Abstract from '../assets/abstract.mp4';

const Home = () => {
  return (
    <div className='home'>
      <video src={Abstract} autoplay loop muted/>
    </div>
    // <div
    //   className="h-screen flex items-center justify-center text-white"
    //   style={{
    //     background: `url(${Background}) center/cover no-repeat`,
    //   }}
    // >
    //   <h1 className="text-4xl font-bold text-red-600 relative z-10">Gaming Wave</h1>
    // </div>
  );
};
export default Home;
