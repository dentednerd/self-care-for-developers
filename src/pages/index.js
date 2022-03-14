import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import LayoutTemplate from '../templates/LayoutTemplate';
import Button from '../atoms/Button';
import useCategoriesQuery from '../hooks/useCategoriesQuery';

const IndexPage = () => {
  const categoryData = useCategoriesQuery();

  return (
    <LayoutTemplate>
      <h1>
        Self Care for Developers
      </h1>
      <h2>aka the care and feeding of the software developer</h2>
      <ul>

        {categoryData.map(({ fieldValue }) => (
          <li key={fieldValue}>
            <Link to={`/${kebabCase(fieldValue)}`}>
              <Button>
                Let's talk about {fieldValue}.
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </LayoutTemplate>
  );
}

export default IndexPage;
