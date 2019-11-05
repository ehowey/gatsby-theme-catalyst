/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "../../../contexts/nav-context"
import { animateScroll as scroll } from "react-scroll"
import { HomeContext } from "../../../contexts/home-context"

const SiteTitle = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isNavOpen] = useContext(NavContext)
  const [isHome] = useContext(HomeContext)

  const TitleLinkWrapper = props => {
    if (isHome) {
      return (
        <div
          sx={{
            cursor: "pointer",
          }}
          onClick={scroll.scrollToTop}
        >
          {props.children}
        </div>
      )
    } else {
      return (
        <Link
          sx={{
            color: isNavOpen ? "header.textOpen" : "header.text",
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
          fontSize: [4, 5, 6],
          flex: "0 0 auto",
          color: isNavOpen ? "header.textOpen" : "header.text",
          m: 0,
        }}
      >
        {data.site.siteMetadata.title}
      </h1>
    </TitleLinkWrapper>
  )
}

export default SiteTitle
