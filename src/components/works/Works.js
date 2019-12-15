import React from 'react';
import { NavLink } from 'react-router-dom';
import './Works.scss';
import School from '../../assets/img/primaire.jpg';
import OldHelp from '../../assets/img/maison-retraite.jpg';
import Teaching from '../../assets/img/tutorat.jpg';
import Nurse from '../../assets/img/hopital.jpg';

const Works = () => (
  <>
    <h2 className="works-main-title h2-title" id="works">
      <span>EXPÉRIENCES </span>
      PROFESSIONNELLES
    </h2>
    <div className="works-container">
      <NavLink to="/ehpad" className="works" style={{ backgroundImage: `url(${OldHelp})` }}>
        <div className="works-vignette">
          <h3>Stage en EHPAD</h3>
          <span>Février 2016</span>
        </div>
      </NavLink>
      <NavLink to="/hopital" className="works" style={{ backgroundImage: `url(${Nurse})` }}>
        <div className="works-vignette">
          <h3>Stage en Hôpital</h3>
          <span>Novembre-Décembre 2016</span>
        </div>
      </NavLink>
      <NavLink to="/service-civique" className="works" style={{ backgroundImage: `url(${School})` }}>
        <div className="works-vignette">
          <h3>Service Civique</h3>
          <span>Janvier à Juillet 2018</span>
        </div>
      </NavLink>
      <NavLink to="/tutorat" className="works" style={{ backgroundImage: `url(${Teaching})` }}>
        <div className="works-vignette">
          <h3>Tutorat</h3>
          <span>Septembre à Décembre 2019</span>
        </div>
      </NavLink>
    </div>
  </>
);

export default Works;
