/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Link as AnchorLink } from "react-scroll"
import { useContext } from "react"
import { NavContext } from "../../contexts/nav-context"
import { MobileContext } from "../../contexts/mobile-context"
import { HeaderHeightContext } from "../../contexts/header-height-context"

const NavLinksBlended = () => {
  if (typeof window !== "undefined") {
    var is_root = window.location.pathname === "/" //Equals true if we're at the root
  }
  const [open, setOpen] = useContext(NavContext)
  const [mobile] = useContext(MobileContext)
  const [headerHeight] = useContext(HeaderHeightContext)
  const navOffset = -Math.abs(headerHeight + 16)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          pageLinks {
            name
            link
          }
          anchorLinks {
            name
            link
          }
        }
      }
    }
  `)
  if (is_root) {
    return (
      <ul
        sx={{
          display: "flex",
          flexDirection: mobile ? "column" : "row",
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
        {data.site.siteMetadata.anchorLinks.map(link => (
          <li
            sx={{
              my: mobile ? 2 : 0,

              mx: 1,
            }}
            key={link.name}
            role="none"
          >
            <AnchorLink
              sx={{
                color: open ? "header.textOpen" : "header.text",
                textDecoration: "none",
                py: 2,
                px: 1,
                mr: mobile ? 0 : 3,
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
              to={link.link.replace(/#/g, "").toLowerCase()}
              onClick={() => setOpen(false)}
              role="menuitem"
              spy={true}
              hashSpy={true}
              smooth={true}
              activeClass="active"
              duration={500}
              offset={navOffset}
            >
              {link.name}
            </AnchorLink>
          </li>
        ))}
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
              sx={{
                color: open ? "header.textOpen" : "header.text",
                textDecoration: "none",
                py: 2,
                px: 1,
                mr: mobile ? 0 : 3,
                cursor: "pointer",
                position: "relative",
                fontFamily: "navLinks",
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
    )
  } else {
    return (
      <ul
        sx={{
          display: [open ? "flex" : "none", "flex", null],
          flexDirection: mobile ? "column" : "row",
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
        {data.site.siteMetadata.anchorLinks.map(link => (
          <li
            sx={{
              my: mobile ? 2 : 0,

              mx: 1,
            }}
            key={link.name}
            role="none"
          >
            <Link
              sx={{
                color: open ? "header.textOpen" : "header.text",
                textDecoration: "none",
                py: 2,
                px: 1,
                mr: mobile ? 0 : 3,
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
              to={"/" + link.link}
              role="menuitem"
            >
              {link.name}
            </Link>
          </li>
        ))}
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
              sx={{
                color: open ? "header.textOpen" : "header.text",
                textDecoration: "none",
                py: 2,
                px: 1,
                mr: mobile ? 0 : 3,
                cursor: "pointer",
                position: "relative",
                fontFamily: "navLinks",
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
    )
  }
}

export default NavLinksBlended
