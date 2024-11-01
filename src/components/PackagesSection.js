import React from 'react';

const PackagesSection = () => (
  <section className="py-20 text-center bg-blue-50">
    <h2 className="text-3xl font-bold mb-8">Exclusive Packages</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Adventure Package</h3>
        <p>Perfect for thrill-seekers looking for excitement.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Relaxation Package</h3>
        <p>Enjoy a peaceful getaway with spa treatments and beach access.</p>
      </div>
    </div>
  </section>
);

export default PackagesSection;
