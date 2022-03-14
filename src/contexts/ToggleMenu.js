import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ToggleMenuContext = createContext();

export const ToggleMenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerClasses = [];
  if (isMenuOpen) {
    headerClasses.push('open');
  }

  return (
    <ToggleMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen, headerClasses }}>
      {children}
    </ToggleMenuContext.Provider>
  );
}

ToggleMenuProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}
