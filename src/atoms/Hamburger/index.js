import React from 'react';
import { styled } from '../../stitches.config';

const StyledHamburger = styled('div', {
  width: '2rem',
  height: '1rem',
  position: 'relative',
  transform: 'rotate(0deg)',
  transition: '0.5s ease-in-out',
  cursor: 'pointer',

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

  '&.open span:nth-of-type(1)': {
    top: '1rem',
    width: '0%',
    left: '50%',
  },

  '&.open span:nth-of-type(2)': {
    transform: 'rotate(45deg)',
  },

  '&.open span:nth-of-type(3)': {
    transform: 'rotate(-45deg)',
  },

  '&.open span:nth-of-type(4)': {
    top: '1rem',
    width: '0%',
    left: '50%',
  }
});

const Hamburger = ({ isMenuOpen, setIsMenuOpen }) => (
  <StyledHamburger
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className={isMenuOpen && 'open'}
  >
    <span />
    <span />
    <span />
    <span />
  </StyledHamburger>
);

export default Hamburger;
