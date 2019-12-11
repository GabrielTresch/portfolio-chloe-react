import React from 'react';
import Logo from '../../img/logo.svg';
import './Navigation.scss';

const Navigation = () => (
  <nav>
    <div>
      <a href="#about" className="logo"><img src={Logo} alt="logo chloé muller" /></a>
      <a href="#about">À PROPOS</a>
      <a href="#works">EXPÉRIENCES PROFESSIONNELLES</a>
      <a href="#competences">COMPETENCES</a>
    </div>
  </nav>
);

export default Navigation;
