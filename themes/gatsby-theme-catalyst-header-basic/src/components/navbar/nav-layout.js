/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "theme-ui"
import Nav from "./nav"
import NavUL from "./nav-ul"
import NavLinks from "./nav-links"
import NavSocialLinks from "./nav-social"
import NavMobileButton from "./nav-mobile-button"
import NavColorButton from "./nav-color-button"

const SiteNav = () => {
  return (
    <Fragment>
      <Nav>
        <NavUL>
          <NavLinks />
        </NavUL>
        <NavSocialLinks />
        <NavColorButton />
      </Nav>
      <NavMobileButton />
    </Fragment>
  )
}

export default SiteNav
