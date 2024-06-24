import React from 'react';
import Abstract from '../assets/abstract.mp4';

const About = () => {
    
    return (
        <div className="relative">
            <video
                className="absolute top-0 left-0 w-screen h-screen object-cover z-0"
                autoPlay
                loop
                muted
            >
                <source src={Abstract} type="video/mp4" />
                {/* Add additional source tags for other video formats */}
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-white mb-4">About Us</h1>
                    <p className="text-lg text-white mb-4">
                        Welcome to our games website! We are passionate about gaming and aim
                        to provide a platform where gamers can find their favorite games,
                        connect with other players, and stay updated with the latest gaming
                        news and trends.
                    </p>
                    <p className="text-lg text-white mb-4">
                        Our team consists of avid gamers who are dedicated to curating the best
                        gaming content for our users. Whether you're into action, adventure,
                        strategy, or simulation games, we've got you covered.
                    </p>
                    <p className="text-lg text-white mb-4">
                        Feel free to explore our website, discover new games, read reviews, and
                        join the gaming community. We're constantly updating our platform to
                        enhance your gaming experience, so stay tuned for exciting updates!
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default About;
