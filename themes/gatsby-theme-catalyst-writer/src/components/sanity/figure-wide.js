/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import { useSanityConfig } from "./use-sanity-config"

export default ({ node }) => {
  if (!node.asset) {
    return null
  }

  const sanityConfig = useSanityConfig()

  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 1440 },
    sanityConfig
  )

  return (
    <figure>
      <Img
        sx={{
          maxHeight: "350px",
          width: "80vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-40vw",
          marginRight: "-40vw",
        }}
        fluid={fluidProps}
        alt={node.alt}
      />
      {node.caption && (
        <figcaption
          sx={{
            color: "grey",
            fontSize: 2,
            textAlign: "center",
          }}
        >
          {node.caption}
        </figcaption>
      )}
    </figure>
  )
}
