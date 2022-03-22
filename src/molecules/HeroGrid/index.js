import React from 'react';
import { styled } from '../../stitches.config';
import TagUndraw from '../../atoms/TagUndraw';

const StyledHeroGrid = styled('section', {
  display: 'grid',
  gridTemplateRows: 'repeat(2, auto)',
  alignItems: 'center',
  maxWidth: '768px',

  h1: {
    textAlign: 'left'
  },

  h2: {
    textAlign: 'right'
  },

  '@media (min-width: 768px)': {
    gridTemplateRows: '1fr',
    gridTemplateColumns: 'repeat(2, 1fr)',

    h1: {
      textAlign: 'left'
    },

    h2: {
      textAlign: 'left'
    },
  }
});

const HeroGrid = ({ tag }) => {
  const title = tag
    ? <h1>Let's talk about {tag}.</h1>
    : (
      <>
        <h1>
          Self Care for Developers
        </h1>
        <h2 style={{ fontWeight: 400 }}>aka the care and feeding of the software developer</h2>
      </>
    )
  return (
    <StyledHeroGrid>
      <section>
        {title}
      </section>
      <TagUndraw tag={tag} />
    </StyledHeroGrid>
  );
}

export default HeroGrid;
