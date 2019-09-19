/** @jsx jsx */
import { jsx } from "theme-ui"
import Branding from "./branding"
import Nav from "./nav"
import MobileButton from "./mobileButton"
import { useContext } from "react"
import { NavContext } from "../navContext"

const SiteHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      catalystConfig {
        headerType
      }
    }
  `)
  const [open] = useContext(NavContext)
  const headerPosition = () => {
    if (data.catalystConfig.headerType === "anchornav") {
      return "fixed"
    } else {
      return "static"
    }
  }
  return (
    <header
      sx={{
        position: headerPosition,
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: [
          theme => theme.sizes.headerHeight,
          theme => theme.sizes.headerHeightTablet,
          theme => theme.sizes.headerHeightLaptop,
        ],
        width: "100%",
        px: 3,
        color: open ? "header.textOpen" : "header.text",
        backgroundColor: open ? "header.backgroundOpen" : "header.background",
        zIndex: "50", //Ensure the header is overtop of any content under it, e.g. a photo
      }}
    >
      <Branding />
      <MobileButton />
      <Nav />
    </header>
  )
}

export default SiteHeader
