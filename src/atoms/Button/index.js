import React from 'react';
import { styled } from '../../stitches.config';

const StyledButton = styled('button', {
  border: 'none',
  backgroundColor: '$title',
  color: '$buttonText',
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

        '&:hover': {
          backgroundColor: '$gold400'
        }
      }
    }
  },
  defaultVariants: {
    home: 'false'
  }
});

const Button = ({ children, home }) => {
  return (
    <StyledButton home={home}>
      {children}
    </StyledButton>
  );
}

export default Button;
