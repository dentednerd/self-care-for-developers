import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../templates/Layout';

const Article = ({ data }) => {
  return (
    <Layout>
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  );
}

Article.propTypes = {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      nodes: PropTypes.array.isRequired
    }).isRequired
  }).isRequired
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default Article;
