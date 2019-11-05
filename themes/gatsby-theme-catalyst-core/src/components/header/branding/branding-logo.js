/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "../../../contexts/nav-context"
import { animateScroll as scroll } from "react-scroll"
import { HomeContext } from "../../../contexts/home-context"
import { useCatalystConfig } from "../../../utils/use-catalyst-config"

const SiteLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
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

  const [isNavOpen] = useContext(NavContext)
  const [isHome] = useContext(HomeContext)
  const { invertSiteLogo } = useCatalystConfig()
  const invertLogo = () => {
    if (invertSiteLogo) {
      return "invert(1)"
    } else {
      return "none"
    }
  }

  const ImgLinkWrapper = props => {
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
          filter: isNavOpen ? invertLogo : "none",
        }}
        fluid={data.brandingLogo.childImageSharp.fluid}
        alt={data.site.siteMetadata.title}
        imgStyle={{ objectFit: "contain" }}
      />
    </ImgLinkWrapper>
  )
}

export default SiteLogo
