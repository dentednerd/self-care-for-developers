import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import LayoutTemplate from '../templates/LayoutTemplate';
import Button from '../atoms/Button';

const IndexPage = ({
  data: {
    allMdx: { group },
  },
}) => (
  <LayoutTemplate>
    <h1>
      Self Care for Developers
    </h1>
    <h2>aka the care and feeding of the software developer</h2>
    <ul>

      {group.map(({ fieldValue, totalCount }) => (
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

export const query = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
    }
  }
`;

export default IndexPage;
