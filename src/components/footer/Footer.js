import React from 'react';
import './Footer.scss';
import FacebookIcon from '../../assets/img/facebook.svg';
import InstagramIcon from '../../assets/img/instagram.svg';
import YoutubeIcon from '../../assets/img/youtube.svg';

const Footer = () => (
  <footer>
    <div>
      <a href="https://www.instagram.com/chloe_mlr_/" target="blank"><img src={InstagramIcon} alt="instagram" /></a>
      <a href="https://www.youtube.com/channel/UCyf1ZDnM_Q_bEBUxGSyiBLA" target="blank"><img src={YoutubeIcon} alt="youtube" /></a>
      <a href="https://www.facebook.com/chloe.mimi.9" target="blank"><img src={FacebookIcon} alt="facebook" /></a>
    </div>
    <span>© Chloé Muller - Tous droits réservés</span>
  </footer>
);

export default Footer;
