import React from 'react';
import Navigation from '../components/navigation/Navigation';
import About from '../components/about/About';

const LayoutContainer = () => (
  <>
    <Navigation />
    <main>
      <About />
    </main>
  </>
);

export default LayoutContainer;
