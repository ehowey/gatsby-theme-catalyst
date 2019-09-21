/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Branding from "./navbar/branding"
import Nav from "./navbar/nav"
import MobileButton from "./navbar/mobileButton"
import { useContext } from "react"
import { NavContext } from "./navbar/navContext"

const SiteHeader = () => {
  const [open] = useContext(NavContext)
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
        position: data.catalystConfig.headerPosition,
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: [
          theme => theme.sizes.headerHeight,
          theme => theme.sizes.headerHeightTablet,
          theme => theme.sizes.headerHeightLaptop,
        ],
        width: "100%",
        top: 0,
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
