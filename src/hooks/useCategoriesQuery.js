import { useStaticQuery, graphql } from 'gatsby';

const useCategoriesQuery = () => {
  const categoryData = useStaticQuery(graphql`
    query {
      allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
        totalCount
      }
    }
  `);
  return categoryData;
}

export default useCategoriesQuery;
