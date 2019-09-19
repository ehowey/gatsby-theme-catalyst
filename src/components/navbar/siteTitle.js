/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "../navContext"

const SiteTitle = props => {
  const [open] = useContext(NavContext)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <h1
      sx={{
        fontFamily: "siteTitle",
        fontSize: [3, 5, 6],
        flex: "0 0 auto",
      }}
    >
      <Link
        sx={{
          color: open ? "header.textOpen" : "header.text",
          textDecoration: "none",
        }}
        to="/"
      >
        {data.site.siteMetadata.title}
      </Link>
    </h1>
  )
}

export default SiteTitle
