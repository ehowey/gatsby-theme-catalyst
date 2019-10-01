/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Branding from "./navbar/branding"
import Nav from "./navbar/nav"
import MobileButton from "./navbar/mobileButton"
import { NavContext } from "./contexts/navContext"
import { MobileContext } from "./contexts/mobileContext"
import { useWindowSize } from "./contexts/windowSizeContext"

const SiteHeader = () => {
  const [open] = useContext(NavContext)
  //eslint-disable-next-line
  const [mobile, setMobile] = useContext(MobileContext)
  const { width } = useWindowSize()
  const data = useStaticQuery(graphql`
    query {
      catalystConfig {
        headerPosition
        mobileMenuBreakpoint
      }
    }
  `)
  const mobileBreakpoint = parseInt(data.catalystConfig.mobileMenuBreakpoint)

  if (width < mobileBreakpoint) {
    setMobile(true)
  } else {
    setMobile(false)
  }

  return (
    <header
      id="header"
      sx={{
        position: data.catalystConfig.headerPosition,
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: [
          theme => theme.sizes.headerHeight,
          theme => theme.sizes.headerHeightTablet,
          theme => theme.sizes.headerHeightLaptop,
        ],
        alignItems: "center",
        height: open ? "100vh" : "auto",
        width: "100%",
        top: 0,
        px: 3,
        color: open ? "header.textOpen" : "header.text",
        backgroundColor: open ? "header.backgroundOpen" : "header.background",
        zIndex: "999", //Ensure the header is overtop of any content under it, e.g. a photo
      }}
    >
      <Branding />
      <MobileButton />
      <Nav />
    </header>
  )
}

export default SiteHeader
