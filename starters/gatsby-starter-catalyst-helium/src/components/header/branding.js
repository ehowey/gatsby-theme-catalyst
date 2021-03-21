/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"

const SiteBranding = () => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const { title } = useSiteMetadata()
  return (
    <div
      sx={{
        display: ["flex", null, "grid", null, null],
        placeItems: "center",
        justifyContent: "center",
        gridArea: "branding",
        variant: "variants.branding",
      }}
    >
      <Link
        to="/"
        onClick={() => setIsNavOpen(false)}
        sx={{ textDecoration: "none" }}
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
