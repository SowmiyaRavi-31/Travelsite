import React from 'react';

const TestimonialsSection = () => (
  <section className="py-20 text-center bg-blue-50">
    <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
    <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
      <div className="p-6 bg-white rounded-lg shadow-md max-w-sm mx-auto">
        <p>"This product transformed the way I work!"</p>
        <p className="font-semibold mt-2">- User One</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md max-w-sm mx-auto">
        <p>"Unmatched functionality and ease of use."</p>
        <p className="font-semibold mt-2">- User Two</p>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
