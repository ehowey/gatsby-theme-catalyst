/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Social from "./socialHeader"

const siteNav = props => {
  const { theme } = useThemeUI()
  const headOpen = () => {
    return window.innerHeight - parseInt(theme.sizes.headerHeight) + "px"
  }
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  return (
    <nav
      sx={{
        gridColumn: ["1 / -1", "1 / -1", "2 / 3"],
        gridRow: ["2 / 3", "2 / 3", "1 / 2"],
        justifySelf: ["center", "start", "end"],
        alignItems: "center",
        justifyContent: ["flex-start", "space-between", "flex-start"],
        height: [props.open ? headOpen() : 0, "headerHeightTablet", "auto"],
        mt: [props.open ? 2 : 0, 0, null],
        display: "flex",
        flexDirection: ["column", "row", null],
        width: ["auto", "100%", "auto"],
      }}
      role="navigation"
      aria-label="main-navigation"
    >
      <div
        sx={{
          display: [props.open ? "flex" : "none", "flex", null],
          mr: ["auto", 3, null],
          ml: "auto",
          mb: [3, 0, null],
          order: [2, 2, 1],

          a: {
            color: props.open ? "header.iconsOpen" : "header.icons",
            mr: [3, 2, null],
            height: theme => theme.sizes.iconsHeader,
            textDecoration: "none",
          },
          "a:last-of-type": {
            mr: 0,
          },
          "a:hover": {
            color: "header.iconsHover",
          },
        }}
      >
        <Social />
      </div>
      <ul
        sx={{
          display: [props.open ? "flex" : "none", "flex", null],
          flexDirection: ["column", "row", null],
          textAlign: ["center", "left", null],
          listStyle: "none",
          m: 0,
          p: 0,
        }}
        aria-label="menu-bar"
        role="menubar"
      >
        {data.site.siteMetadata.menuLinks.map(link => (
          <li
            key={link.name}
            sx={{
              my: [2, 0, null],
              mx: 1,
            }}
            role="none"
          >
            <Link
              to={link.link}
              sx={{
                color: props.open ? "header.textOpen" : "header.text",
                textDecoration: "none",
                py: 2,
                px: 1,
                mr: [0, 3, null],
                cursor: "pointer",
                position: "relative",
                fontWeight: "bold",
                letterSpacing: "1px",

                "::after": {
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "secondary",
                  content: "''",
                  opacity: "0",
                  transition: "height 0.3s, opacity 0.3s, transform 0.3s",
                  transform: "translateY(-10px)",
                },

                ":hover::after, :focus::after": {
                  height: "5px",
                  opacity: "1",
                  transform: "translateY(0px)",
                },
              }}
              role="menuitem"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default siteNav
