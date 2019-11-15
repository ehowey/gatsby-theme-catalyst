/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Fragment } from "react";
import { useContext } from "react";
import { HomeContext } from "gatsby-theme-catalyst-core";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityHomePage(limit: 1) {
        nodes {
          id
          heroTitle
          heroText
          heroImage {
            asset {
              fluid(maxWidth: 720) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  const [isHome] = useContext(HomeContext);
  const hero = data.allSanityHomePage.nodes;
  if (isHome) {
    return (
      <div
        sx={{
          display: "grid",
          alignContent: "center",
          justifyContent: "center",
          bg: "accent",
          height: "50vh"
        }}
      >
        {hero.map(content => (
          <Fragment key={content.id}>
            <Img fluid={content.heroImage.asset.fluid} alt={hero.title} />
            <h1>{content.heroTitle}</h1>
            <p>{content.heroText}</p>
          </Fragment>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default Hero;
