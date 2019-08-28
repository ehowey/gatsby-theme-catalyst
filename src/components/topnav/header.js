/** @jsx jsx */
import { jsx } from "theme-ui"
import Branding from "./branding"
import Nav from "./nav"
import MobileButton from "./mobileButton"

const SiteHeader = props => {
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
        color: props.open ? "header.textOpen" : "header.text",
        backgroundColor: props.open
          ? "header.backgroundOpen"
          : "header.background",
        zIndex: "50", //Ensure the header is overtop of any content under it, e.g. a photo
      }}
    >
      <Branding {...props} />
      <MobileButton {...props} />
      <Nav {...props} />
    </header>
  )
}

export default SiteHeader
