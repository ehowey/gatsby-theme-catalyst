/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "../navContext"

const SiteLogo = props => {
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

  return (
    <Link to="/">
      <Img
        sx={{
          // Uses width because of weird bug with flex box and shrinking content we don't want shrunk
          width: [
            theme => theme.sizes.logoWidth,
            theme => theme.sizes.logoWidthTablet,
            theme => theme.sizes.logoWidthLaptop,
          ],
          mr: 1,
          filter: [open ? invertLogo : "none", "none", null],
        }}
        fluid={data.brandingLogo.childImageSharp.fluid}
        alt={data.site.siteMetadata.title}
        imgStyle={{ objectFit: "contain" }}
      />
    </Link>
  )
}

export default SiteLogo
