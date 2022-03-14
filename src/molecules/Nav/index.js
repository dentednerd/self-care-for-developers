import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';
import { styled } from '../../stitches.config';
import useCategoriesQuery from '../../hooks/useCategoriesQuery';

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

const Nav = ({
  toggleIsOpen,
  headerClasses
}) => {
  const categoryData = useCategoriesQuery();

  return (
    <StyledNav className={headerClasses.join(' ')}>
      {categoryData.allMdx.group.map(({ fieldValue }) => (
        <p key={fieldValue}>
          <Link to={`/${kebabCase(fieldValue)}`}>
            {fieldValue}
          </Link>
        </p>
      ))}
    </StyledNav>
  );
}

Nav.propTypes = {
  toggleIsOpen: PropTypes.func.isRequired,
  headerClasses: PropTypes.array.isRequired
}

export default Nav;
