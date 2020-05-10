/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useContext } from "react"
import {
  useSiteMetadata,
  NavContext,
  useCatalystConfig,
} from "gatsby-theme-catalyst-core"
import LinkWrapper from "./branding-link-wrapper"

const SiteTitle = () => {
  const { title } = useSiteMetadata()
  const { displaySiteTitle, displaySiteTitleMobile } = useCatalystConfig()
  const [isNavOpen] = useContext(NavContext)

  const displayLaptop = () => {
    if (displaySiteTitle) {
      return "block"
    } else {
      return "none"
    }
  }
  const displayPhone = () => {
    if (displaySiteTitleMobile) {
      return "block"
    } else {
      return "none"
    }
  }

  return (
    <LinkWrapper>
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
    </LinkWrapper>
  )
}

export default SiteTitle
