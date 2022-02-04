import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '../../stitches.config';

const StyledNav = styled('nav', {
  position: 'absolute',
  top: '4rem',
  right: '0',
  margin: '0',
  padding: '1rem',
  height: 'auto',
  width: '8rem',
  transform: 'scaleY(0)',
  transition: 'transform 0.2s ease-in-out',
  transformOrigin: 'center top',
  zIndex: '9',
  backgroundColor: '$accent',

  '&.open': {
    transform: 'scaleY(1)',
    transition: 'transform 0.2s ease-in-out',
    transformOrigin: 'center top',
  },

  '&.scrolled': {
    borderRight: 'none',
    right: '0',
  },
});

const Nav = ({ toggleIsOpen, headerClasses }) => {
  return (
    <StyledNav className={headerClasses.join(' ')}>
      <p>One</p>
      <p>Two</p>
      <p>Three</p>
    </StyledNav>
  );
}

Nav.propTypes = {
  toggleIsOpen: PropTypes.func.isRequired,
  headerClasses: PropTypes.array.isRequired
}

export default Nav;
