/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import PortableText from "@sanity/block-content-to-react";
import urlBuilder from "@sanity/image-url";

const BioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityBioPage {
        _rawBody
        topimage {
          asset {
            fixed(width: 720, height: 200) {
              ...GatsbySanityImageFixed
            }
          }
        }
        title
      }
    }
  `);

  const urlFor = source =>
    urlBuilder({ projectId: "utcr8kb1", dataset: "production" }).image(source);

  const serializer = {
    types: {
      image: props => (
        <figure>
          <img
            src={urlFor(props.node.asset)
              .width(600)
              .url()}
            alt={props.node.alt}
          />
          <figcaption>{props.node.caption}</figcaption>
        </figure>
      )
    }
  };

  return (
    <div>
      <Img fixed={data.sanityBioPage.topimage.asset.fixed} />
      <h1>{data.sanityBioPage.title}</h1>
      <PortableText
        blocks={data.sanityBioPage._rawBody}
        serializers={serializer}
      />
    </div>
  );
};

export default BioPage;
