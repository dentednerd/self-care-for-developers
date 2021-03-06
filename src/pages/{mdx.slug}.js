import * as React from 'react';
import { styled } from '../stitches.config';
import { graphql } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import kebabCase from 'lodash/kebabCase';
import { Helmet } from 'react-helmet';
import LayoutTemplate from '../templates/LayoutTemplate';
import BigLink from '../atoms/BigLink';
import HomeLink from '../atoms/HomeLink';
import HeroGrid from '../molecules/HeroGrid';
import ButtonGrid from '../molecules/ButtonGrid';

const CommentsSection = styled('section', {
  backgroundColor: '$colors$accent',
  padding: '$1',
  borderRadius: '$1',
  marginBottom: '$2'
})

const Post = ({ data, location }) => {
  const { title, date, authorName, authorGithub, tags, } = data.mdx.frontmatter;

  return (
    <LayoutTemplate location={location}>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>{title} - Self Care for Developers</title>
      </Helmet>
      <article>
        <header>
          <HeroGrid title={title} tag={tags[0]} />
          <p>by <a href={`https://github.com/${authorGithub}`}>{authorName}</a> on {date}</p>
        </header>
        <section className="article-body">
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </section>

        <CommentsSection>
          <h2 style={{ textAlign: 'left' }}>Let's talk some more...</h2>
          <Disqus
            config={{
              url: `${location.href}`,
              identifier: title,
              title: title,
            }}
          />
        </CommentsSection>

        <ButtonGrid>
          {tags.map((tag) => (
            <BigLink key={tag} to={`/${kebabCase(tag)}`}>
              Let's talk more about {tag}.
            </BigLink>
          ))}
          <HomeLink />
        </ButtonGrid>
      </article>
    </LayoutTemplate>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        authorName
        authorGithub
        tags
      }
      body
    }
  }
`

export default Post;
