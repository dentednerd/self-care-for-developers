import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Helmet } from 'react-helmet';
import LayoutTemplate from '../templates/LayoutTemplate';
import Button from '../atoms/Button';
import HomeButton from '../atoms/HomeButton';
import HeroGrid from '../molecules/HeroGrid';
import ButtonGrid from '../molecules/ButtonGrid';

const CategoryPage = ({ location, pageContext, data }) => {
  const { tag } = pageContext;
  const { edges } = data.allMdx;

  return (
    <LayoutTemplate location={location}>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>{tag} - Self Care for Developers</title>
      </Helmet>
      <HeroGrid tag={tag} />
      <ButtonGrid>
        {edges.map(({ node }) => {
          const { slug } = node;
          const { title } = node.frontmatter;
          return (
            <Link key={slug} to={`/${slug}`}>
              <Button>
                {title}
              </Button>
            </Link>
          );
        })}
        <HomeButton />
      </ButtonGrid>
    </LayoutTemplate>
  )
}

CategoryPage.propTypes = {
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

export default CategoryPage;

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
