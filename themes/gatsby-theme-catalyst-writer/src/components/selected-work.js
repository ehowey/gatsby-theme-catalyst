/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const SelectedWork = () => {
  const data = useStaticQuery(graphql`
    query {
      categories: allSanityCategories(sort: { order: ASC, fields: order }) {
        edges {
          node {
            title
          }
        }
      }
      allwork: allSanityWork(
        filter: { include: { eq: true } }
        sort: { fields: date, order: DESC }
      ) {
        nodes {
          title
          id
          link
          publisher
          date
          categories {
            title
          }
        }
      }
    }
  `);

  const categories = data.categories.edges;
  const writing = data.allwork.nodes;

  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: "1rem"
      }}
    >
      {categories.map(({ node }) => (
        <div>
          <p>{node.title}</p>
          {writing.map(published => (
            <div>
              {published.categories
                .filter(category => category.title === node.title)
                .map(() => (
                  <p>
                    {published.title} - {published.date}
                  </p>
                ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SelectedWork;
