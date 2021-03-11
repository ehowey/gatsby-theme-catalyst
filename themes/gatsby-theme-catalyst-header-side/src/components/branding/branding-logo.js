/** @jsx jsx */
import { jsx } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext, HomeContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { animateScroll as scroll } from "react-scroll"

const SiteLogo = () => {
  // Get all necessary variables
  const [isHome] = useContext(HomeContext)
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const {
    invertSiteLogo,
    displaySiteLogo,
    displaySiteLogoMobile,
  } = useCatalystConfig()
  const { title, logo } = useSiteMetadata()
  // Set a value for invert logo when required
  const invertLogo = () => {
    if (invertSiteLogo) {
      return "invert(1)"
    } else {
      return "none"
    }
  }
  // Set a value for laptop display of logo
  const displayLaptop = () => {
    if (displaySiteLogo) {
      return "block"
    } else {
      return "none"
    }
  }
  // Set a value for mobile display of logo
  const displayPhone = () => {
    if (displaySiteLogoMobile) {
      return "block"
    } else {
      return "none"
    }
  }

  if (isHome) {
    return (
      <div
        sx={{
          display: [displayPhone, null, displayLaptop, null, null],
          cursor: "pointer",
        }}
        onClick={() => {
          setIsNavOpen(false)
          scroll.scrollToTop()
        }}
        onKeyPress={() => {
          setIsNavOpen(false)
          scroll.scrollToTop()
        }}
        role="button"
        tabIndex="0"
        aria-label="Scroll to top"
      >
        <GatsbyImage
          image={logo}
          sx={{
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
          alt={title}
          imgStyle={{ objectFit: "contain" }} />
      </div>
    );
  } else {
    return (
      <Link
        to="/"
        onClick={() => setIsNavOpen(false)}
        sx={{ textDecoration: "none" }}
      >
        <GatsbyImage
          image={logo}
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
          alt={title}
          imgStyle={{ objectFit: "contain" }} />
      </Link>
    );
  }
}

export default SiteLogo
