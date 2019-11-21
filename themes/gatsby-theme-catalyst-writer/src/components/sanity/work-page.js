/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const WorkPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityWorkPage(sort: { fields: _updatedAt, order: DESC }, limit: 1) {
        nodes {
          title
          topimage {
            alt
            asset {
              fluid(maxHeight: 200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);

  const pageData = data.allSanityWorkPage.nodes;

  return (
    <Fragment>
      {pageData.map(page => (
        <Fragment key={page.title}>
          <Img
            sx={{
              height: ["150px", "200px", null, null, null]
            }}
            fluid={page.topimage.asset.fluid}
            alt={page.topimage.alt}
          />
          <Styled.h1>{page.title}</Styled.h1>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default WorkPage;
