import React from 'react';
import PropTypes from 'prop-types';

const LayoutContainer = ({ children }) => (
  <>
    {children}
  </>
);

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutContainer;
