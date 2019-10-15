/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useContext } from "react"
import { NavContext } from "../contexts/nav-context"
import { MobileContext } from "../contexts/mobile-context"

const NavLinksDefault = () => {
  const [open] = useContext(NavContext)
  const [mobile] = useContext(MobileContext)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          pageLinks {
            name
            link
          }
        }
      }
    }
  `)
  return (
    <ul
      sx={{
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        flexWrap: "wrap",
        textAlign: mobile ? "center" : "left",
        listStyle: "none",
        m: 0,
        p: 0,
        ".active::after": {
          position: "absolute",
          top: "100%",
          left: "0",
          width: "100%",
          height: "5px",
          backgroundColor: "secondary",
          content: "''",
          opacity: "1",
          transform: "translateY(0px)",
        },
      }}
      aria-label="menu-bar"
      role="menubar"
    >
      {data.site.siteMetadata.pageLinks.map(link => (
        <li
          key={link.name}
          sx={{
            my: mobile ? 2 : 0,
            mx: 1,
          }}
          role="none"
        >
          <Link
            to={link.link}
            activeClassName="active"
            sx={{
              color: open ? "header.textOpen" : "header.text",
              textDecoration: "none",
              py: 2,
              px: 1,
              mr: mobile ? 0 : 2,
              cursor: "pointer",
              position: "relative",
              fontFamily: "navLinks",
              fontWeight: "bold",
              letterSpacing: "1px",
              whiteSpace: "nowrap",
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
  )
}

export default NavLinksDefault
