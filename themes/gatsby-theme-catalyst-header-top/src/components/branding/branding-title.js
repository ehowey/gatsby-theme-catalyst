/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext, HomeContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { animateScroll as scroll } from "react-scroll"

const SiteTitle = () => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const { title } = useSiteMetadata()

  return (
    <Link
      to="/"
      onClick={() => setIsNavOpen(false)}
      sx={{ textDecoration: "none" }}
    >
      <Styled.h1
        as="span"
        sx={{
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

export default SiteTitle
