import React from 'react';
import { styled } from '../../stitches.config';

const StyledButtonGrid = styled('section', {
  display: 'grid',
  gap: '$1',
  width: '100%',

  '@media(min-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  }
})

export default function ButtonGrid({ children }) {
  return (
    <StyledButtonGrid>
      {children}
    </StyledButtonGrid>
  )
}
