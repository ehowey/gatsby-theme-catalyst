/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "../navContext"
import { animateScroll as scroll } from "react-scroll"

const SiteTitle = () => {
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

  if (typeof window !== "undefined") {
    var is_root = window.location.pathname === "/" //Equals true if we're at the root
  }

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const TitleLinkWrapper = props => {
    if (is_root) {
      return (
        <div
          sx={{
            cursor: "pointer",
          }}
          onClick={scrollToTop}
        >
          {props.children}
        </div>
      )
    } else {
      return (
        <Link
          sx={{
            color: open ? "header.textOpen" : "header.text",
            textDecoration: "none",
          }}
          to="/"
        >
          {props.children}
        </Link>
      )
    }
  }

  return (
    <TitleLinkWrapper>
      <h1
        sx={{
          fontFamily: "siteTitle",
          fontSize: [3, 5, 6],
          flex: "0 0 auto",
          color: open ? "header.textOpen" : "header.text",
        }}
      >
        {data.site.siteMetadata.title}
      </h1>
    </TitleLinkWrapper>
  )
}

export default SiteTitle
