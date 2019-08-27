/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

const siteHeader = props => {
  const data = useStaticQuery(graphql`
    query {
      catalystConfig {
        headerPosition
      }
    }
  `)
  return (
    <header
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: [
          theme => theme.sizes.headerHeight,
          theme => theme.sizes.headerHeightTablet,
          theme => theme.sizes.headerHeightLaptop,
        ],
        width: "100%",
        px: 3,
        position: data.catalystConfig.headerPosition,
        color: props.open ? "header.textOpen" : "header.text",
        backgroundColor: props.open
          ? "header.backgroundOpen"
          : "header.background",
        zIndex: "50", //Ensure the header is overtop of any content under it, e.g. a photo
      }}
    >
      {props.children}
    </header>
  )
}

export default siteHeader
