import React, { useContext } from 'react';
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
});

const Header = ({ categoryData, darkMode }) => {
  const { isMenuOpen, setIsMenuOpen } = useContext(ToggleMenuContext);

  return (
    <StyledHeader>
      <DarkModeToggle darkMode={darkMode} />
      {categoryData && (
        <>
          <Nav
            categoryData={categoryData}
            isMenuOpen={isMenuOpen}
          />
          <Hamburger
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
