/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql, Link } from "gatsby"

const siteNav = props => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => (
        <nav
          {...props}
          sx={{
            gridColumn: ["1 / -1", "2 / 3", null],
            gridRow: ["2 / 3", "1 / 2", null],
            justifySelf: ["center", "end", null],
            alignSelf: "center",
            height: [props.open ? "calc(100vh - 60px)" : 0, "auto", null],
            marginTop: [props.open ? "1rem": 0, 0, null],
          }}
        >
          <ul
            {...props}
            sx={{
              display: [props.open ? "flex" : "none", "flex", null],
              flexDirection: ["column", "row", null],
              listStyle: "none",
              margin: "0",
              padding: "0",
            }}
          >
            {data.site.siteMetadata.menuLinks.map(link => (
              <li
                key={link.name}
                sx={{
                  margin: ["0 0.75em", "0", null],
                  padding: "0.5em",
                }}
              >
                <Link
                  to={link.link}
                  {...props}
                  sx={{
                    color: props.open ? "header.textOpen" : "header.text",
                    fontSize: [4, 3, null],
                    textDecoration: "none",
                    padding: "1rem 0.5rem",
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    />
  )
}

export default siteNav
