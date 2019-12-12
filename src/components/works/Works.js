import React from 'react';
import './Works.scss';
import School from '../../assets/img/primaire.jpg';
import OldHelp from '../../assets/img/maison-retraite.jpg';
import Teaching from '../../assets/img/tutorat.jpg';
import Nurse from '../../assets/img/hopital.jpg';

const Works = () => (
  <>
    <h2 className="works-main-title">Expériences professionnelles</h2>
    <div className="works-container">
      <div className="works" style={{ backgroundImage: `url(${OldHelp})` }}>
        <div className="works-vignette">
          <h3>Stage en EHPAD</h3>
          <span>11/03/1997 - 28/06/1997</span>
        </div>
      </div>
      <div className="works" style={{ backgroundImage: `url(${Nurse})` }}>
        <div className="works-vignette">
          <h3>Stage en Hôpital</h3>
          <span>11/03/1997 - 28/06/1997</span>
        </div>
      </div>
      <div className="works" style={{ backgroundImage: `url(${School})` }}>
        <div className="works-vignette">
          <h3>Service Civique</h3>
          <span>11/03/1997 - 28/06/1997</span>
        </div>
      </div>
      <div className="works" style={{ backgroundImage: `url(${Teaching})` }}>
        <div className="works-vignette">
          <h3>Tutorat</h3>
          <span>11/03/1997 - 28/06/1997</span>
        </div>
      </div>
    </div>
  </>
);

export default Works;
