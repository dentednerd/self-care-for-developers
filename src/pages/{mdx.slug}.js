import * as React from 'react';
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import LayoutTemplate from '../templates/LayoutTemplate';

const Post = ({ data }) => {
  const {title, date, authorName, authorGithub} = data.mdx.frontmatter;

  return (
    <LayoutTemplate>
      <h1>{title}</h1>
      <p>by <a href={`https://github.com/${authorGithub}`}>{authorName}</a> on {date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
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
      }
      body
    }
  }
`

export default Post;
