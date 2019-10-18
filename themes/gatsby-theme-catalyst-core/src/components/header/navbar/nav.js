/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import NavLayout from "./nav-layout"
import NavLinksDefault from "./nav-links-default"
import NavLinksAnchor from "./nav-links-anchor"
import NavLinksBlended from "./nav-links-blended"
import NavSocialLinks from "./nav-social"
import NavMobileButton from "./nav-mobile-button"

const NavLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      catalystConfig {
        navType
      }
    }
  `)
  if (data.catalystConfig.navType === "default") {
    return <NavLinksDefault />
  } else if (data.catalystConfig.navType === "anchor") {
    return <NavLinksAnchor />
  } else if (data.catalystConfig.navType === "blended") {
    return <NavLinksBlended />
  } else {
    return null
  }
}

const SiteNav = () => {
  return (
    <Fragment>
      <NavLayout>
        <NavLinks />
        <NavSocialLinks />
      </NavLayout>
      <NavMobileButton />
    </Fragment>
  )
}

export default SiteNav
