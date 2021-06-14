/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
// Welcome to your very first experience of component shadowing. There are notes in the code here explaining what each section is doing. The file being shadowed is located at src/gatsby-theme-catalyst-header-top/components/branding

const SiteBranding = () => {
  // isNavOpen is a boolean that detects where the mobile navigation is open or closed
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  // Title is sourced from the site metadata BUT you could very easily source and add your own raw values here. e.g. const title = "My Awesome Site".
  const { title } = useSiteMetadata()
  return (
    <div
      // Container div
      sx={{
        display: "flex",
        alignItems: "center",
        mr: 2,
        variant: "variants.branding",
      }}
    >
      <Link
        // Link back to homepage
        to="/"
        onClick={() => setIsNavOpen(false)}
        sx={{ textDecoration: "none" }}
      >
        <span
          // Site title
          sx={{
            // Notice that the isNavOpen boolean is used here to alloow you control over the color of the text for the header when it is opened or closed. This makes it much easier to make a small graphical change across the whole header. header.text and header.textOpen values can be found in the Theme-UI theme file at src/gatsby-plugin-theme-ui/index.js
            fontSize: [4, null, null, 5, null],
            fontWeight: "heading",
            fontFamily: "heading",
            color: isNavOpen ? "header.textOpen" : "header.text",
            textDecoration: "none",
            m: 0,
            variant: "variants.siteTitle",
          }}
        >
          {title}
        </span>
      </Link>
    </div>
  )
}

export default SiteBranding
