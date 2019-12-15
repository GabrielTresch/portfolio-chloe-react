import React from 'react';
import Navigation from '../components/navigation/Navigation';
import About from '../components/about/About';
import Works from '../components/works/Works';
import Footer from '../components/footer/Footer';
import Competences from '../components/competences/Competences';

const HomeContainer = () => (
  <>
    <Navigation />
    <main>
      <About />
      <Works />
      <Competences />
    </main>
    <Footer />
  </>
);

export default HomeContainer;
