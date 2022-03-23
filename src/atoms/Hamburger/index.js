import React from 'react';
import { styled } from '../../stitches.config';

const StyledHamburger = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  width: '2rem',
  height: '1.25rem',
  position: 'relative',
  transform: 'rotate(0deg)',
  transition: '0.5s ease-in-out',
  cursor: 'pointer',
  display: 'flex',

  span: {
    display: 'block',
    position: 'absolute',
    height: '0.25rem',
    width: '100%',
    background: '$title',
    borderRadius: '0.125rem',
    opacity: '1',
    left: '0',
    transform: 'rotate(0deg)',
    transition: '0.25s ease-in-out',
  },

  '& span:nth-of-type(1)': {
    top: '0',
  },

  '& span:nth-of-type(2), & span:nth-of-type(3)': {
    top: '0.5rem',
  },

  '& span:nth-of-type(4)': {
    top: '1rem',
  },

  '&.cross span:nth-of-type(1)': {
    top: '1rem',
    width: '0%',
    left: '50%',
  },

  '&.cross span:nth-of-type(2)': {
    transform: 'rotate(45deg)',
  },

  '&.cross span:nth-of-type(3)': {
    transform: 'rotate(-45deg)',
  },

  '&.cross span:nth-of-type(4)': {
    top: '1rem',
    width: '0%',
    left: '50%',
  }
});

const Hamburger = ({ hamburgerRef, isMenuOpen, setIsMenuOpen }) => (
  <StyledHamburger
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className={isMenuOpen && 'cross'}
    ref={hamburgerRef}
    id="toggle"
    aria-expanded="false"
    aria-controls="menu"
  >
    <span />
    <span />
    <span />
    <span />
  </StyledHamburger>
);

export default Hamburger;
