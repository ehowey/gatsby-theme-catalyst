/** @jsx jsx */
import { jsx } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

const PageHeader = ({ topImage, topImageAlt }) => {
  return (
    <div
      sx={{
        width: "100vw",
        position: ["relative", null, "static", null, null],
        left: ["calc(-50vw + 50%)", null, "auto", null, null],
        mx: "auto",
        maxWidth: "maxContentWidth",
      }}
    >
      <GatsbyImage
        image={topImage}
        sx={{
          mt: 5,
          height: ["150px", "200px", null, null, null],
          width: ["100vw", null, "auto", null, null],
          borderRadius: "2px",
        }}
        alt={topImageAlt}
      />
    </div>
  )
}

export default PageHeader
