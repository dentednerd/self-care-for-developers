import React from 'react';
import { styled } from '../../stitches.config';

const StyledFurtherReading = styled('section', {
  backgroundColor: '$colors$accent',
  padding: '$1',
  borderRadius: '$1',
  marginBottom: '$2'
})

export default function FurtherReading({ children }) {
  return (
    <StyledFurtherReading>
      <h2>Further Reading</h2>
      {children}
    </StyledFurtherReading>
  );
}
