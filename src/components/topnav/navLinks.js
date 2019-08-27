/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, useStaticQuery, graphql } from "gatsby"

const navLinks = props => {
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
      {data.site.siteMetadata.pageLinks.map(link => (
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

export default navLinks
