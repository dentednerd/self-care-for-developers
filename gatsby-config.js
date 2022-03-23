module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Self Care for Developers",
    description: "A hub of useful information regarding the care and feeding of software developers, curated by software developers."
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: `${__dirname}/src/articles/`,
      },
      __key: "articles",
    },
    "gatsby-plugin-use-dark-mode",
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `self-care-for-developers`
      }
    },
    "gatsby-plugin-mdx"
  ],
};
