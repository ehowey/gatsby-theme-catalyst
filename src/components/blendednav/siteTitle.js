/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { animateScroll as scroll } from "react-scroll"

const siteTitle = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      if (is_root) {
        scroll.scrollToTop()
      } else {
        window.location.href = "/"
      }
    }
  }

  if (typeof window !== "undefined") {
    var is_root = window.location.pathname === "/" //Equals true if we're at the root
  }
  return (
    <div
      sx={{
        cursor: "pointer",
      }}
      onClick={scrollToTop}
    >
      <h1
        sx={{
          fontFamily: "siteTitle",
          fontSize: [3, 5, 6],
          flex: "0 0 auto",
          color: props.open ? "header.textOpen" : "header.text",
        }}
      >
        {data.site.siteMetadata.title}
      </h1>
    </div>
  )
}

export default siteTitle
