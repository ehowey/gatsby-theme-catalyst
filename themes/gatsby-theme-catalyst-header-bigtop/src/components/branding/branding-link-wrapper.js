/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { HomeContext } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"
import { animateScroll as scroll } from "react-scroll"

const LinkWrapper = ({ children }) => {
  const [isHome] = useContext(HomeContext)
  const [isNavOpen, setIsNavOpen] = useContext(NavContext) // eslint-disable-line

  if (isHome) {
    return (
      <div
        sx={{
          cursor: "pointer",
        }}
        onClick={() => {
          setIsNavOpen(false)
          scroll.scrollToTop()
        }}
        onKeyPress={() => {
          setIsNavOpen(false)
          scroll.scrollToTop()
        }}
        role="button"
        tabIndex="0"
        aria-label="Scroll to top"
      >
        {children}
      </div>
    )
  } else {
    return (
      <Link
        to="/"
        onClick={() => setIsNavOpen(false)}
        sx={{ textDecoration: "none" }}
      >
        {children}
      </Link>
    )
  }
}

export default LinkWrapper
