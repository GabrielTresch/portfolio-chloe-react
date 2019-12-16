/* eslint-disable max-len */
import React from 'react';
import ProfilImg from '../../assets/img/chloe-about.jpg';
import './About.scss';

const About = () => (
  <div className="about-container" id="about">
    <div className="about-photo">
      <div className="about-content">
        <img src={ProfilImg} alt="Chloé Muller" />
        <div className="about-carre-deco" />
        <h1>
          <span>CHLOÉ </span>
          MULLER
        </h1>
      </div>
    </div>
    <div className="about-description">
      <h2 className="h2-title">
        <span>QUI </span>
        SUIS-JE ?
      </h2>
      <p>Je m’appelle Chloé Muller, j’ai 22 ans et je suis en 3ème année de licence en Sciences de l’Education. </p>
      <p>
        A travers ce portfolio réflexif, j’espère vous permettre de mieux cerner ma personnalité, mon caractère, mes buts et mes objectifs dans la vie.
      </p>
    </div>
  </div>
);

export default About;
