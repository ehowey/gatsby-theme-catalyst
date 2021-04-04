/** @jsx jsx */
import { jsx } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import { useSanityConfig } from "./use-sanity-config"

export default ({ node }) => {
  if (!node.asset) {
    return null
  }

  const { sanityConfig } = useSanityConfig()

  const fluidProps = getGatsbyImageData(
    node.asset,
    { maxWidth: 2560 },
    sanityConfig
  )

  return (
    <figure
      sx={{
        mx: 0,
      }}
    >
      <GatsbyImage
        image={fluidProps}
        sx={{
          maxHeight: "400px",
          width: ["100vw", null, null, "85vw", "80vw"],
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: ["-50vw", null, null, "-42.5vw", "-40vw"],
          marginRight: ["-50vw", null, null, "-42.5vw", "-40vw"],
          variant: "variants.sanityFigureWide",
        }}
        alt={node.alt}
      />
      {node.caption && (
        <figcaption
          sx={{
            color: "grey",
            fontSize: "small",
            textAlign: "center",
            mt: 1,
          }}
        >
          {node.caption}
        </figcaption>
      )}
    </figure>
  )
}
