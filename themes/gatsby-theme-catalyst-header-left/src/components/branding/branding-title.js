/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"
import LinkWrapper from "./branding-link-wrapper"

const SiteTitle = () => {
  const { title } = useSiteMetadata()
  const [isNavOpen] = useContext(NavContext)

  return (
    <LinkWrapper>
      <span
        sx={{
          color: isNavOpen ? "header.textOpen" : "header.text",
          fontFamily: "siteTitle",
          whiteSpace: "nowrap",
          flex: "0 0 auto",
          m: 0,
          variant: "variants.siteTitle",
        }}
      >
        {title}
      </span>
    </LinkWrapper>
  )
}

export default SiteTitle
