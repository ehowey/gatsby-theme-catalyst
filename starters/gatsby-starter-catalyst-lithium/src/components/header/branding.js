/** @jsx jsx */
import { jsx } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"

// Welcome to your very first experience of component shadowing. There are notes in the code here explaining what each section is doing. The file being shadowed is located at src/gatsby-theme-catalyst-header-top/components/branding

const SiteBranding = () => {
  // isNavOpen is a boolean that detects where the mobile navigation is open or closed
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  // Title and logo are sourced from the site metadata BUT you could very easily source and add your own raw values here. e.g. const title = "My Awesome Site". The logo is based of catalyst-site-logo.png, but you could replace this file with a different image of the same name or write your own query and replace the logo source entirely.
  const { title, logo } = useSiteMetadata()
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
        // Link wrapper that points back to the homepage when clicked
        to="/"
        onClick={() => setIsNavOpen(false)}
        sx={{ textDecoration: "none" }}
      >
        <GatsbyImage
          // Logo
          image={logo}
          sx={{
            // Styling for the logo using the breakpoint syntax from Theme-UI. Imagine something like [xs, sm, md, l, xl] for the breakpoint sizes. Play around with the logo sizes and your screen size to see the effects
            height: ["40px", "50px", null, "60px", null],
            width: ["40px", "50px", null, "60px", null],
            variant: "variants.siteLogo",
          }}
          alt={title}
          imgStyle={{ objectFit: "contain" }}
        />
      </Link>
      <Link
        // Link wrapper that points back to the homepage when clicked
        to="/"
        onClick={() => setIsNavOpen(false)}
        sx={{ textDecoration: "none" }}
      >
        <span
          // Site title

          sx={{
            // Notice that the isNavOpen boolean is used here to alloow you control over the color of the text for the header when it is opened or closed. This makes it much easier to make a small graphical change across the whole header. header.text and header.textOpen values can be found in the Theme-UI theme file at src/gatsby-plugin-theme-ui/index.js
            color: isNavOpen ? "header.textOpen" : "header.text",
            m: 0,
            fontFamily: "heading",
            fontWeight: "heading",
            fontSize: [3, 4, null, 5, null],
            textDecoration: "none",
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
