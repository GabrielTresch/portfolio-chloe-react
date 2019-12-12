import React from 'react';
import Navigation from '../components/navigation/Navigation';
import About from '../components/about/About';
import Works from '../components/works/Works';

const HomeContainer = () => (
  <>
    <Navigation />
    <main>
      <About />
      <Works />
    </main>
  </>
);

export default HomeContainer;
