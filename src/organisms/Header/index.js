import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { styled } from '../../stitches.config';
import { ToggleMenuContext } from '../../contexts/ToggleMenu';
import DarkModeToggle from '../../atoms/DarkModeToggle';
import Nav from '../../molecules/Nav';
import Hamburger from '../../atoms/Hamburger';

const StyledHeader = styled('header', {
  position: 'fixed',
  top: '0',
  zIndex: '9',
  width: 'calc(100% - 2rem)',
  height: '2rem',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '$accent',
  color: '$text',
  padding: '1rem',
  marginBottom: '1rem',

  h1: {
    fontSize: '$1',
    lineHeight: '$1',
    marginBottom: '0',

    '@media(min-width: 768px)': {
      fontSize: '$2',
      lineHeight: '$2',
    }
  }
});

const Header = ({ location, categoryData, darkMode }) => {
  const { isMenuOpen, setIsMenuOpen } = useContext(ToggleMenuContext);

  const hamburgerRef = useRef();

  console.log(location);

  return (
    <StyledHeader>
      <DarkModeToggle darkMode={darkMode} />
      {location.pathname !== '/' && <h1>Self Care for Developers</h1>}
      {categoryData && (
        <>
          <Nav
            categoryData={categoryData}
            hamburgerRef={hamburgerRef}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <Hamburger
            hamburgerRef={hamburgerRef}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </>
      )}
    </StyledHeader>
  );
}

Header.propTypes = {
  darkMode: PropTypes.object.isRequired
}

export default Header;
