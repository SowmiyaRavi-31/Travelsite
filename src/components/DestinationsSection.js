import React from 'react';

const DestinationsSection = () => (
  <section className="py-20 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-8">Popular Destinations</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      {/* Destination 1 - Paris */}
      <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <img 
          src={`${process.env.PUBLIC_URL}/images/paris.jpg.jpeg`} 
          alt="Paris" 
          className="w-full h-40 object-cover rounded-md mb-4" 
        />
        <h3 className="text-xl font-semibold mb-2">Paris</h3>
        <p className="text-gray-600">The city of lights and love awaits you.</p>
      </div>

      {/* Destination 2 - Bali */}
      <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <img 
          src={`${process.env.PUBLIC_URL}/images/bali.jpg.jpg`} 
          alt="Bali" 
          className="w-full h-40 object-cover rounded-md mb-4" 
        />
        <h3 className="text-xl font-semibold mb-2">Bali</h3>
        <p className="text-gray-600">Experience the paradise of beaches and temples.</p>
      </div>

      {/* Destination 3 - Tokyo */}
      <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <img 
          src={`${process.env.PUBLIC_URL}/images/tokyo.jpg.jpg`} 
          alt="Tokyo" 
          className="w-full h-40 object-cover rounded-md mb-4" 
        />
        <h3 className="text-xl font-semibold mb-2">Tokyo</h3>
        <p className="text-gray-600">A blend of tradition and modernity in Japan.</p>
      </div>
       {/* Destination 4 - Rome */}
       <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <img 
          src={`${process.env.PUBLIC_URL}/images/Rome Italy.png`} 
          alt="Rome" 
          className="w-full h-40 object-cover rounded-md mb-4" 
        />
        <h3 className="text-xl font-semibold mb-2">Rome</h3>
        <p className="text-gray-600">Rome is among the most beautiful city in the world.</p>
      </div>
       {/* Destination 5- Hawai */}
       <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <img 
          src={`${process.env.PUBLIC_URL}/images/Hawai.png`} 
          alt="Maui,Hawaii" 
          className="w-full h-40 object-cover rounded-md mb-4" 
        />
        <h3 className="text-xl font-semibold mb-2">Maui , Hawaii</h3>
        <p className="text-gray-600">Maui is an island in Hawaii, and the island fulfils most of the wishes you want in your holiday vacations.</p>
      </div>
       {/* Destination 6 - london*/}
       <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <img 
          src={`${process.env.PUBLIC_URL}/images/london.png`} 
          alt="London" 
          className="w-full h-40 object-cover rounded-md mb-4" 
        />
        <h3 className="text-xl font-semibold mb-2">London</h3>
        <p className="text-gray-600">London is among the world's biggest centres of tourist attraction.</p>
      </div>
      {/* Destination 7 - Arizona*/}
      <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <img 
          src={`${process.env.PUBLIC_URL}/images/Arizona.png`} 
          alt="London" 
          className="w-full h-40 object-cover rounded-md mb-4" 
        />
        <h3 className="text-xl font-semibold mb-2">Arizona</h3>
        <p className="text-gray-600">The Grand Canyon is one of the seven natural wonders of the world, and it is mainly located in the northwestern Arizona, part of the southwestern United States</p>
      </div>
      {/* Destination 8-Newzealand*/}
      <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <img 
          src={`${process.env.PUBLIC_URL}/images/Newzealand.png`} 
          alt="London" 
          className="w-full h-40 object-cover rounded-md mb-4" 
        />
        <h3 className="text-xl font-semibold mb-2">Newzealand</h3>
        <p className="text-gray-600">There are very countries in the world with similar natural beauty and overwhelming friendly citizens like New Zealand.</p>
      </div>
       {/* Destination 9 - Australia*/}
       <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <img 
          src={`${process.env.PUBLIC_URL}/images/Australia.jpg`} 
          alt="London" 
          className="w-full h-40 object-cover rounded-md mb-4" 
        />
        <h3 className="text-xl font-semibold mb-2">Australia</h3>
        <p className="text-gray-600">Australia is globally famous for its natural wonders, wide-open spaces, beaches, deserts, "The Bush", and "The Outback".</p>
      </div>
      
    </div>
  </section>
);

export default DestinationsSection;
