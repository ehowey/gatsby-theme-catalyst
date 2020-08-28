/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext, HomeContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { animateScroll as scroll } from "react-scroll"

const SiteTitle = () => {
  // Get all necessary variables
  const [isHome] = useContext(HomeContext)
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const { displaySiteTitle, displaySiteTitleMobile } = useCatalystConfig()
  const { title } = useSiteMetadata()

  // Set a value for laptop display of title
  const displayLaptop = () => {
    if (displaySiteTitle) {
      return "block"
    } else {
      return "none"
    }
  }
  // Set a value for mobile display of logo
  const displayPhone = () => {
    if (displaySiteTitleMobile) {
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
        <Styled.h1
          as="span"
          sx={{
            display: [displayPhone, null, displayLaptop, null, null],
            color: isNavOpen ? "header.textOpen" : "header.text",
            textDecoration: "none",
            m: 0,
            variant: "variants.siteTitle",
          }}
        >
          {title}
        </Styled.h1>
      </div>
    )
  } else {
    return (
      <Link
        to="/"
        onClick={() => setIsNavOpen(false)}
        sx={{ textDecoration: "none" }}
      >
        <Styled.h1
          as="span"
          sx={{
            display: [displayPhone, null, displayLaptop, null, null],
            color: isNavOpen ? "header.textOpen" : "header.text",
            textDecoration: "none",
            m: 0,
            variant: "variants.siteTitle",
          }}
        >
          {title}
        </Styled.h1>
      </Link>
    )
  }
}

export default SiteTitle
