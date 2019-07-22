/** @jsx jsx */
import { jsx } from "theme-ui"

const siteHeader = props => {
  return (
      <header
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: [theme => theme.sizes.headerHeight, theme => theme.sizes.headerHeightTablet, theme => theme.sizes.headerHeightLaptop],
          width: "100%",
          position: theme => theme.catalystOptions.headerPosition,
          color: props.open ? "header.textOpen" : "header.text",
          backgroundColor: props.open ? "header.backgroundOpen" : "header.background",
          zIndex: "1000"
        }}
      >
        { props.children }
      </header>
    )
  }

export default siteHeader
