import * as React from 'react';
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import LayoutTemplate from '../templates/LayoutTemplate';

const Post = ({ data }) => {
  return (
    <LayoutTemplate>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.date}</p>
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
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default Post;
