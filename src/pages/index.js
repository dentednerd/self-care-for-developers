import React from 'react';
import kebabCase from 'lodash/kebabCase';
import LayoutTemplate from '../templates/LayoutTemplate';
import { Helmet } from 'react-helmet';
import BigLink from '../atoms/BigLink';
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
          <BigLink key={fieldValue} to={`/${kebabCase(fieldValue)}`}>
            Let's talk about {fieldValue}.
          </BigLink>
        ))}
      </ButtonGrid>
    </LayoutTemplate>
  );
}

export default IndexPage;
