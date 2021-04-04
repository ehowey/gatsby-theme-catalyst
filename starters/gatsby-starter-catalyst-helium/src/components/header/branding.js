/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"

// Welcome to your very first experience of component shadowing. There are notes in the code here explaining what each section is doing. The file being shadowed is located at src/gatsby-theme-catalyst-header-top/components/branding

const SiteBranding = () => {
  // isNavOpen is a boolean that detects where the mobile navigation is open or closed
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const { title } = useSiteMetadata()
  // Title issourced from the site metadata BUT you could very easily source and add your own raw values here. e.g. const title = "My Awesome Site".
  return (
    <div
      // Container div
      sx={{
        display: ["flex", null, "grid", null, null],
        placeItems: "center",
        justifyContent: "center",
        gridArea: "branding",
        variant: "variants.branding",
      }}
    >
      <Link
        // Link wrapper that points back to the homepage when clicked
        to="/"
        onClick={() => setIsNavOpen(false)}
        sx={{ textDecoration: "none" }}
      >
        <Themed.h1
          // Site title
          as="span"
          sx={{
            // Notice that the isNavOpen boolean is used here to alloow you control over the color of the text for the header when it is opened or closed. This makes it much easier to make a small graphical change across the whole header. header.text and header.textOpen values can be found in the Theme-UI theme file at src/gatsby-plugin-theme-ui/index.js
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
