import React from 'react';
import { Link } from 'gatsby';
import { styled } from '../stitches.config';
import kebabCase from 'lodash/kebabCase';
import LayoutTemplate from '../templates/LayoutTemplate';
import { Helmet } from 'react-helmet';
import Button from '../atoms/Button';
import HeroGrid from '../molecules/HeroGrid';
import useCategoriesQuery from '../hooks/useCategoriesQuery';

const StyledList = styled('ul', {
  '@media(min-width: 768px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(auto, auto)',
    gap: '$1',

    li: {
      margin: '0'
    }
  }
});

const IndexPage = () => {
  const categoryData = useCategoriesQuery();

  return (
    <LayoutTemplate>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>Self Care for Developers</title>
      </Helmet>
      <HeroGrid />
      <StyledList>
        {categoryData.map(({ fieldValue }) => (
          <li key={fieldValue}>
            <Link to={`/${kebabCase(fieldValue)}`}>
              <Button>
                Let's talk about {fieldValue}.
              </Button>
            </Link>
          </li>
        ))}
      </StyledList>
    </LayoutTemplate>
  );
}

export default IndexPage;
