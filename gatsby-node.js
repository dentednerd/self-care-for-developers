const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const categoryPage = path.resolve('src/pages/CategoryPage.js');

  const result = await graphql(`
    {
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  const tags = result.data.tagsGroup.group;

  tags.forEach((tag) => {
    createPage({
      path: `/${_.kebabCase(tag.fieldValue)}`,
      component: categoryPage,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
