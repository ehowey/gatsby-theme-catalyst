/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
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
        gridColumn: "1 / -1",
        gridRow: "1 / 2",
        display: "flex",
        flexDirection: ["row", null, "column", null, null],
        alignItems: "center",
        justifyContent: ["center", null, "start", null, null],
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
            height: ["40px", null, "80px", "100px", null],
            width: ["40px", null, "80px", "100px", null],
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
        sx={{
          textDecoration: "none",
          textAlign: "center",
          display: ["none", null, "block", null, null],
        }}
      >
        <Themed.h1
          as="span"
          sx={{
            color: isNavOpen ? "header.textOpen" : "header.text",
            textDecoration: "none",
            m: 0,
            variant: "variants.siteTitle",
          }}
        >
          {title}
        </Themed.h1>
      </Link>
    </div>
  )
}

export default SiteBranding
