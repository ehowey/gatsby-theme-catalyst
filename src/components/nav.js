/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"

const siteNav = props => {
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
  const { theme } = useThemeUI()
  const headOpen = () => {
    return window.innerHeight - parseInt(theme.sizes.headerHeight) + "px"
  }
  return (
    <nav
      sx={{
        gridColumn: ["1 / -1", "2 / 3", null],
        gridRow: ["2 / 3", "1 / 2", null],
        justifySelf: ["center", "end", null],
        alignSelf: "center",
        height: [props.open ? headOpen() : 0, "auto", null],
        mt: [props.open ? 2 : 0, 0, null],
        mr: [0, 3, null],
      }}
      role="navigation"
      aria-label="main-navigation"
    >
      <ul
        sx={{
          display: [props.open ? "flex" : "none", "flex", null],
          flexDirection: ["column", "row", null],
          listStyle: "none",
          margin: "0",
          padding: "0",
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
