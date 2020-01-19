/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import HeaderLayout from "./header-layout"
import Branding from "./branding/branding"
import Nav from "./navbar/nav-layout"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"

const SiteHeader = () => {
  const [isNavOpen] = useContext(NavContext)
  const { useStickyHeader } = useCatalystConfig()
  return (
    <header
      sx={{
        display: "grid",
        position: useStickyHeader ? "sticky" : "static",
        top: 0,
        width: "100%",
        height: "100vh",
        color: isNavOpen ? "header.textOpen" : "header.text",
        backgroundColor: isNavOpen
          ? "header.backgroundOpen"
          : "header.background",
        gridArea: "header",
        zIndex: "888", // Ensure the header is always on top
      }}
      id="header"
    >
      <HeaderLayout>
        <Branding />
        <Nav />
      </HeaderLayout>
    </header>
  )
}

export default SiteHeader

// const SiteHeader = () => {
//   const [isNavOpen] = useContext(NavContext)
//   const { useStickyHeader } = useCatalystConfig()

//   return (
//     <header
//       sx={{
//         display: "grid",
//         position: useStickyHeader ? "sticky" : "static",
//         top: 0,
//         width: "100%",
//         color: isNavOpen ? "header.textOpen" : "header.text",
//         backgroundColor: isNavOpen
//           ? "header.backgroundOpen"
//           : "header.background",
//         zIndex: "888", // Ensure the header is always on top
//       }}
//       id="header"
//     >
//       <HeaderLayout>
//         <Branding />
//         <Nav />
//       </HeaderLayout>
//     </header>
//   )
// }

// export default SiteHeader
