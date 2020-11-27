/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import { useSanityConfig } from "./use-sanity-config"

export default ({ node }) => {
  if (!node.asset) {
    return null
  }

  const { sanityProjectId, sanityDataset } = useSanityConfig()
  const sanityConfig = { projectId: sanityProjectId, dataset: sanityDataset }

  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 1440 },
    sanityConfig
  )

  return (
    <figure
      sx={{
        mx: 0,
      }}
    >
      <Img
        sx={{
          minHeight: ["300px", "auto", null, null, null],
          variant: "variants.sanityFigure",
        }}
        fluid={fluidProps}
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
