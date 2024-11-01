import React from 'react';

const HeroSection = () => (
  <section
    className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.webp)`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-blue-900 opacity-70"></div>

    {/* Navbar at the Top of Hero Section without Background */}
    <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-6 z-20">
      <h1 className="text-2xl font-bold tracking-wide">TravelSite</h1>
      <ul className="flex space-x-8 text-lg font-medium">
        <li><a href="#home" className="hover:text-yellow-400 transition duration-300">Home</a></li>
        <li><a href="#destinations" className="hover:text-yellow-400 transition duration-300">Destinations</a></li>
        <li><a href="#contact" className="hover:text-yellow-400 transition duration-300">Contact</a></li>
      </ul>
    </div>

    {/* Hero Content */}
    <div className="relative z-10 max-w-2xl px-6 mt-20 text-center">
      <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 shadow-md shadow-black/40">
        Discover Your Next Adventure
      </h2>
      <p className="text-lg md:text-2xl mb-10 font-light tracking-wide text-gray-200">
        Uncover amazing places, book exclusive tours, and create unforgettable memories.
      </p>
      <button className="px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
        Start Exploring
      </button>
    </div>
  </section>
);

export default HeroSection;
