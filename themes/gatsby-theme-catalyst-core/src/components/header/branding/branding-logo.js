/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "../../../contexts/nav-context"
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
      brandingLogo: file(relativePath: { eq: "logo.png" }) {
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
          height: [
            theme => theme.sizes.logoHeightSmall,
            null,
            theme => theme.sizes.logoHeightMedium,
            theme => theme.sizes.logoHeightLarge,
            null,
          ],
          width: [
            theme => theme.sizes.logoWidthSmall,
            null,
            theme => theme.sizes.logoWidthMedium,
            theme => theme.sizes.logoWidthLarge,
            null,
          ],
          mr: 2,
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
