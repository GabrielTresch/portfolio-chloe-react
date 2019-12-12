import React from 'react';
import { NavLink } from 'react-router-dom';
import Arrow from '../../assets/img/arrow.svg';

const GoBack = () => (
  <NavLink to="/" className="goback"><img src={Arrow} alt="return" /></NavLink>
);

export default GoBack;
