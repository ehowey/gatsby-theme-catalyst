/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"

const SiteBranding = () => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const { title, logo } = useSiteMetadata()
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        ml: 2,
        mr: 2,
        variant: "variants.branding",
      }}
    >
      <Link
        to="/"
        onClick={() => setIsNavOpen(false)}
        sx={{ textDecoration: "none" }}
      >
        <GatsbyImage
          image={logo}
          sx={{
            height: ["40px", "50px", null, "60px", null],
            width: ["40px", "50px", null, "60px", null],
            variant: "variants.siteLogo",
          }}
          alt={title}
          objectFit="contain"
          loading="eager"
          imgStyle={{ objectFit: "contain" }}
        />
      </Link>
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
    </div>
  )
}

export default SiteBranding
