import React, { useContext, useRef } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { styled } from '../../stitches.config';
import { ToggleMenuContext } from '../../contexts/ToggleMenu';
import DarkModeToggle from '../../atoms/DarkModeToggle';
import Menu from '../../molecules/Menu';
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
      {location.pathname !== '/' && (
        <Link to="/">
          <h1>
            Self Care for Developers
          </h1>
        </Link>
      )}
      {categoryData && (
        <nav role="navigation">
          <Menu
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
        </nav>
      )}
    </StyledHeader>
  );
}

Header.propTypes = {
  darkMode: PropTypes.object.isRequired
}

export default Header;
