import React, { useRef } from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';
import { styled } from '../../stitches.config';
import useClickOutsideNav from '../../hooks/useClickOutsideNav';

const StyledNav = styled('ul', {
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
});

const Menu = ({ categoryData, hamburgerRef, isMenuOpen, setIsMenuOpen }) => {
  const navRef = useRef();
  useClickOutsideNav(navRef, hamburgerRef, isMenuOpen, setIsMenuOpen);

  return (
    <StyledNav
      id="menu"
      className={isMenuOpen && 'open'}
      ref={navRef}
    >
      {categoryData?.map(({ fieldValue }) => (
        <li key={fieldValue}>
          <Link to={`/${kebabCase(fieldValue)}`} onClick={() => setIsMenuOpen(false)}>
            {fieldValue}
          </Link>
        </li>
      ))}
      <li><Link onClick={() => setIsMenuOpen(false)} to="/">home</Link></li>
    </StyledNav>
  );
}

export default Menu;
