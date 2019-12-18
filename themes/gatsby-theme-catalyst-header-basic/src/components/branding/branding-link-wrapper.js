/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { HomeContext } from "gatsby-theme-catalyst-core"
import { animateScroll as scroll } from "react-scroll"

const LinkWrapper = props => {
  const [isHome] = useContext(HomeContext)
  if (isHome) {
    return (
      <div
        sx={{
          cursor: "pointer",
        }}
        onClick={scroll.scrollToTop}
      >
        {props.children}
      </div>
    )
  } else {
    return (
      <Link to="/" sx={{ textDecoration: "none" }}>
        {props.children}
      </Link>
    )
  }
}

export default LinkWrapper
