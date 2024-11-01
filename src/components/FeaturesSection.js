import React from 'react';

const FeaturesSection = () => (
  <section className="py-20 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-8">Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Feature One</h3>
        <p>Quick and easy integration to get you started instantly.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
        <p>Powerful analytics to give you insights on performance.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
        <p>Seamless collaboration for teams working remotely.</p>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
