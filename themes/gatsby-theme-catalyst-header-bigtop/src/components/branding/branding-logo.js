/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import LinkWrapper from "./branding-link-wrapper"

const SiteLogo = () => {
  const [isNavOpen] = useContext(NavContext)
  const {
    invertSiteLogo,
    displaySiteLogo,
    displaySiteLogoMobile,
  } = useCatalystConfig()
  const { title, logo } = useSiteMetadata()
  const invertLogo = () => {
    if (invertSiteLogo) {
      return "invert(1)"
    } else {
      return "none"
    }
  }
  const displayLaptop = () => {
    if (displaySiteLogo) {
      return "block"
    } else {
      return "none"
    }
  }
  const displayPhone = () => {
    if (displaySiteLogoMobile) {
      return "block"
    } else {
      return "none"
    }
  }
  return (
    <LinkWrapper>
      <Img
        sx={{
          display: [displayPhone, null, displayLaptop, null, null],
          height: [
            (theme) => theme.sizes.logoHeightXS,
            (theme) => theme.sizes.logoHeightS,
            (theme) => theme.sizes.logoHeightM,
            (theme) => theme.sizes.logoHeightL,
            (theme) => theme.sizes.logoHeightXL,
          ],
          width: [
            (theme) => theme.sizes.logoWidthXS,
            (theme) => theme.sizes.logoWidthS,
            (theme) => theme.sizes.logoWidthM,
            (theme) => theme.sizes.logoWidthL,
            (theme) => theme.sizes.logoWidthXL,
          ],
          filter: isNavOpen ? invertLogo : "none",
          variant: "variants.siteLogo",
        }}
        fluid={logo}
        alt={title}
        imgStyle={{ objectFit: "contain" }}
      />
    </LinkWrapper>
  )
}

export default SiteLogo
