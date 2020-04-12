/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { HomeContext } from "gatsby-theme-catalyst-core"
import { animateScroll as scroll } from "react-scroll"

const LinkWrapper = ({ children }) => {
  const [isHome] = useContext(HomeContext)
  if (isHome) {
    return (
      <div
        sx={{
          cursor: "pointer",
        }}
        onClick={scroll.scrollToTop}
        onKeyPress={scroll.scrollToTop}
        role="button"
        tabIndex="0"
        aria-label="Scroll to top"
      >
        {children}
      </div>
    )
  } else {
    return (
      <Link to="/" sx={{ textDecoration: "none" }}>
        {children}
      </Link>
    )
  }
}

export default LinkWrapper
