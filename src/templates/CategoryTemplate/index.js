import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import LayoutTemplate from '../LayoutTemplate';
import Button from '../../atoms/Button';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges } = data.allMdx;

  return (
    <LayoutTemplate>
      <h1>Let's talk about {tag}.</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node;
          const { title } = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={`/${slug}`}>
                <Button>
                  {title}
                </Button>
              </Link>
            </li>
          );
        })}
        <li>
          <Link to='/'>
            <Button>
              Let's talk about something else - take me back.
            </Button>
          </Link>
        </li>
      </ul>
    </LayoutTemplate>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          id
          slug
        }
      }
    }
  }
`;
