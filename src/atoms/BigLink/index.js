import React from 'react';
import { Link } from 'gatsby';
import { styled } from '../../stitches.config';

const StyledBigLink = styled(Link, {
  border: 'none',
  backgroundColor: '$title',
  color: '$bigLinkText',
  textAlign: 'center',
  width: 'calc(100% - $1)',
  maxWidth: 'calc(768px - 2rem)',
  padding: '$0',
  borderRadius: '$0',
  fontFamily: '$Raleway',
  transition: 'all ease-in-out 0.2s',
  cursor: 'pointer',
  boxShadow: '4px 4px 4px $colors$shadow',

  '&:hover': {
    backgroundColor: '$titleHover',
    boxShadow: '2px 2px 2px $colors$shadow',
    transition: 'all ease-in-out 0.2s'
  },

  variants: {
    home: {
      true: {
        backgroundColor: '$gold500',
        color: '$blue100',

        '&:hover': {
          backgroundColor: '$gold400',
          color: '$blue100',
        }
      }
    }
  },
  defaultVariants: {
    home: 'false'
  }
});

const BigLink = ({ to, children, home }) => {
  return (
    <StyledBigLink to={to} home={home}>
      {children}
    </StyledBigLink>
  );
}

export default BigLink;
