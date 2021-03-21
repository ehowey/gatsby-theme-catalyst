/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Fragment } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const PageHeader = ({ title, topImage, topImageAlt }) => {
  return (
    <Fragment>
      <GatsbyImage
        image={topImage}
        sx={{
          height: ["150px", "200px", null, null, null],
          width: ["100vw", null, "auto", null, null],
          position: ["relative", null, "static", null, null],
          left: ["50%", null, "auto", null, null],
          right: ["50%", null, "auto", null, null],
          ml: ["-50vw", null, 0, null, null],
          mr: ["-50vw", null, 0, null, null],
          mt: 5,
        }}
        alt={topImageAlt}
      />
      <Themed.h1>{title}</Themed.h1>
    </Fragment>
  )
}

export default PageHeader
