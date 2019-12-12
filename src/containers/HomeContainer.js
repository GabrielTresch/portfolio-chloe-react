import React from 'react';
import Navigation from '../components/navigation/Navigation';
import About from '../components/about/About';
import Works from '../components/works/Works';
import Footer from '../components/footer/Footer';

const HomeContainer = () => (
  <>
    <Navigation />
    <main>
      <About />
      <Works />
    </main>
    <Footer />
  </>
);

export default HomeContainer;
