import React, { useState } from 'react';
import Logo from '../../assets/img/logo.svg';
import './Navigation.scss';

const Navigation = () => {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };
  return (
    <>
      <div className={state ? 'col col-open' : 'col'} role="button" tabIndex="0" onClick={toggle} onKeyPress={toggle}>
        <div className="con">
          <div className="bar arrow-top-r" />
          <div className="bar arrow-middle-r" />
          <div className="bar arrow-bottom-r" />
        </div>
      </div>
      <nav className={state ? 'nav-open' : 'nav-closed'}>
        <div>
          <a href="#about" className="logo"><img src={Logo} alt="logo chloé muller" /></a>
          <a href="#about">À PROPOS</a>
          <a href="#works">EXPÉRIENCES PROFESSIONNELLES</a>
          <a href="#competences">LIEN AVEC LE MÉTIER</a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
