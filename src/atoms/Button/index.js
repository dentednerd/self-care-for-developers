import React from 'react';
import { styled } from '../../stitches.config';

const StyledButton = styled('button', {
  border: 'none',
  backgroundColor: '$title',
  color: '$blue100',
  padding: '$1',
  borderRadius: '$1',
  fontFamily: '$Raleway',
  transition: 'all ease-in-out 0.2s',
  cursor: 'pointer',
  boxShadow: '4px 4px 4px $colors$shadow',

  '&:hover': {
    backgroundColor: '$titleHover',
    boxShadow: '2px 2px 2px $colors$shadow',
    transition: 'all ease-in-out 0.2s'
  },
});

const Button = ({ children }) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}

export default Button;
