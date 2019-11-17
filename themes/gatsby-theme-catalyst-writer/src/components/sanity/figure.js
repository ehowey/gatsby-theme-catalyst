/** @jsx jsx */
import { jsx } from "theme-ui";
import Img from "gatsby-image";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "./client-config";

export default ({ node }) => {
  if (!node.asset) {
    return null;
  }

  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 1440 },
    clientConfig.sanity
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
};
