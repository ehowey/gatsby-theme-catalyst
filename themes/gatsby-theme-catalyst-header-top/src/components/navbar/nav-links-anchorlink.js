/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useState, useEffect } from "react"
import { Link as AnchorLink } from "react-scroll"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavMenuAnchorLink = ({ link, children }) => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext) // eslint-disable-line
  const [headerHeight, setHeaderHeight] = useState(0)
  const navOffset = -Math.abs(headerHeight + 16)

  //eslint-disable-next-line
  useEffect(() => {
    const header = document.getElementById("header")
    const headerHeight = header.getBoundingClientRect().height
    setHeaderHeight(headerHeight)
  })
  return (
    <AnchorLink
      to={link.replace(/#/g, "").toLowerCase().replace(/\s+/g, "-")}
      onClick={() => setIsNavOpen(false)}
      spy={true}
      smooth={true}
      activeClass="active"
      duration={500}
      offset={navOffset}
      tabIndex="0"
    >
      {children}
    </AnchorLink>
  )
}

export default NavMenuAnchorLink
