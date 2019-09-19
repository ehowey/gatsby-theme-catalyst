/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Branding from "./navbar/branding"
import Nav from "./navbar/nav"
import MobileButton from "./navbar/mobileButton"
import { useContext } from "react"
import { NavContext } from "./navContext"

const SiteHeader = () => {
  const [open] = useContext(NavContext)
  const data = useStaticQuery(graphql`
    query {
      catalystConfig {
        headerType
      }
    }
  `)
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

// /** @jsx jsx */
// import { jsx } from "theme-ui"
// import { useStaticQuery, graphql } from "gatsby"
// import TopNavHeader from "./topnav/header"
// import AnchorNavHeader from "./anchornav/header"
// import BlendedNavHeader from "./blendednav/header"

// const SiteHeader = props => {
//   const data = useStaticQuery(graphql`
//     query {
//       catalystConfig {
//         headerType
//       }
//     }
//   `)
//   if (data.catalystConfig.headerType === "topnav") {
//     return <TopNavHeader {...props} />
//   } else if (data.catalystConfig.headerType === "anchornav") {
//     return <AnchorNavHeader {...props} />
//   } else if (data.catalystConfig.headerType === "blendednav") {
//     return <BlendedNavHeader {...props} />
//   } else {
//     return null
//   }
// }

// export default SiteHeader
