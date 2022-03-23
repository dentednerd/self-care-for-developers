import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import LayoutTemplate from '../templates/LayoutTemplate';
import { Helmet } from 'react-helmet';
import Button from '../atoms/Button';
import HeroGrid from '../molecules/HeroGrid';
import ButtonGrid from '../molecules/ButtonGrid';
import useCategoriesQuery from '../hooks/useCategoriesQuery';

const IndexPage = ({ location }) => {
  const categoryData = useCategoriesQuery();

  return (
    <LayoutTemplate location={location}>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>Self Care for Developers</title>
      </Helmet>
      <HeroGrid />
      <ButtonGrid>
        {categoryData.map(({ fieldValue }) => (
            <Link key={fieldValue} to={`/${kebabCase(fieldValue)}`}>
              <Button>
                Let's talk about {fieldValue}.
              </Button>
            </Link>
        ))}
      </ButtonGrid>
    </LayoutTemplate>
  );
}

export default IndexPage;
