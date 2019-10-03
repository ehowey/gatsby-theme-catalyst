/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "../contexts/navContext"
import { animateScroll as scroll } from "react-scroll"

const SiteLogo = () => {
  const [open] = useContext(NavContext)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      catalystConfig {
        invertSiteLogo
      }
      brandingLogo: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const invertLogo = () => {
    if (data.catalystConfig.invertSiteLogo) {
      return "invert(1)"
    } else {
      return "none"
    }
  }

  if (typeof window !== "undefined") {
    var is_root = window.location.pathname === "/" //Equals true if we're at the root
  }

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const ImgLinkWrapper = props => {
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
      return <Link to="/">{props.children}</Link>
    }
  }

  return (
    <ImgLinkWrapper>
      <Img
        sx={{
          // Uses width because of weird bug with flex box and shrinking content we don't want shrunk
          width: [
            theme => theme.sizes.logoWidth,
            theme => theme.sizes.logoWidthTablet,
            theme => theme.sizes.logoWidthLaptop,
          ],
          mr: 1,
          filter: open ? invertLogo : "none",
        }}
        fluid={data.brandingLogo.childImageSharp.fluid}
        alt={data.site.siteMetadata.title}
        imgStyle={{ objectFit: "contain" }}
      />
    </ImgLinkWrapper>
  )
}

export default SiteLogo
