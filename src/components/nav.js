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
      const {theme} = useThemeUI()
      const headOpen = () => {
        return (
          window.innerHeight - parseInt(theme.sizes.headerHeight) + "px"
        )
      }
      return (
        <nav
          sx={{
            gridColumn: ["1 / -1", "2 / 3", null],
            gridRow: ["2 / 3", "1 / 2", null],
            justifySelf: ["center", "end", null],
            alignSelf: "center",
            height: [props.open ? headOpen(): 0, "auto", null],
            mt: [props.open ? 2 : 0, 0, null],
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
                  margin: ["0 0.75em", "0", null],
                  padding: "0.5em",
                }}
                role="none"
              >
                <Link
                  to={link.link}
                  sx={{
                    color: props.open ? "header.textOpen" : "header.text",
                    fontSize: [4, 3, null],
                    py: 2,
                    px: 1
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
