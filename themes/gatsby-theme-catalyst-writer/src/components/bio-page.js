/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import PortableText from "@sanity/block-content-to-react";
import { getFluidGatsbyImage } from "gatsby-source-sanity";

const BioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityBioPage {
        _rawBody
        topimage {
          alt
          asset {
            fluid(maxHeight: 200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        title
      }
    }
  `);

  const sanityConfig = { projectId: "utcr8kb1", dataset: "production" };

  const serializers = {
    types: {
      figure({ node }) {
        if (!node.asset) {
          return;
        }
        const fluidProps = getFluidGatsbyImage(
          node.asset._ref,
          { maxWidth: 1440 },
          sanityConfig
        );
        return (
          <figure>
            <Img
              sx={{
                maxHeight: "350px",
                width: "100vw",
                position: "relative",
                left: "50%",
                right: "50%",
                marginLeft: "-50vw",
                marginRight: "-50vw"
              }}
              fluid={fluidProps}
              alt={node.alt}
            />
            {node.caption && <figcaption>{node.caption}</figcaption>}
          </figure>
        );
      }
    }
  };

  return (
    <div>
      <Img
        sx={{
          height: "200px"
        }}
        fluid={data.sanityBioPage.topimage.asset.fluid}
        alt={data.sanityBioPage.topimage.alt}
      />
      <h1>{data.sanityBioPage.title}</h1>
      <PortableText
        blocks={data.sanityBioPage._rawBody}
        serializers={serializers}
      />
    </div>
  );
};

export default BioPage;
