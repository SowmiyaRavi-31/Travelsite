import React from 'react';
import HeroSection from './components/HeroSection';
import DestinationsSection from './components/DestinationsSection';
import PackagesSection from './components/PackagesSection';
import ContactSection from './components/ContactSection';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="App">

      <div id="home">
        <HeroSection />
      </div>
      <div id="destinations">
        <DestinationsSection />
      </div>
      <div id="packages">
        <PackagesSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <CallToAction />
    </div>
  );
}

export default App;
