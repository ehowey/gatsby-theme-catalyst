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
    { maxWidth: 1440 },
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
          minHeight: ["300px", "auto", null, null, null],
          variant: "variants.sanityFigure",
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
