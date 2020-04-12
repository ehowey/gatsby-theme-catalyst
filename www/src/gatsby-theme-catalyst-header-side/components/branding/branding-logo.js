/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import Img from "gatsby-image"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import LinkWrapper from "gatsby-theme-catalyst-header-top/src/components/branding/branding-link-wrapper"

const SiteLogo = () => {
  const { title, logo } = useSiteMetadata()
  const [isNavOpen] = useContext(NavContext)
  const { invertSiteLogo } = useCatalystConfig()
  const [mode] = useColorMode()
  const isDark = mode === "dark"
  const invertLogo = () => {
    if (invertSiteLogo) {
      return "invert(1)"
    } else {
      return "none"
    }
  }
  return (
    <LinkWrapper>
      <Img
        sx={{
          height: [
            theme => theme.sizes.logoHeightXS,
            theme => theme.sizes.logoHeightS,
            theme => theme.sizes.logoHeightM,
            theme => theme.sizes.logoHeightL,
            theme => theme.sizes.logoHeightXL,
          ],
          width: [
            theme => theme.sizes.logoWidthXS,
            theme => theme.sizes.logoWidthS,
            theme => theme.sizes.logoWidthM,
            theme => theme.sizes.logoWidthL,
            theme => theme.sizes.logoWidthXL,
          ],
          mr: 2,
          filter: isDark ? "invert(1)" : isNavOpen ? invertLogo : "none",
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
