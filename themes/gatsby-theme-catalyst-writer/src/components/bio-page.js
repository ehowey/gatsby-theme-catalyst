/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import PortableText from "@sanity/block-content-to-react";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "./sanity/client-config";
import serializers from "./sanity/serializers";

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

  return (
    <div>
      <Img
        sx={{
          height: ["150px", "200px", null, null, null]
        }}
        fluid={data.sanityBioPage.topimage.asset.fluid}
        alt={data.sanityBioPage.topimage.alt}
      />
      <Styled.h1>{data.sanityBioPage.title}</Styled.h1>
      <PortableText
        blocks={data.sanityBioPage._rawBody}
        serializers={serializers}
        {...clientConfig.sanity}
      />
    </div>
  );
};

export default BioPage;
