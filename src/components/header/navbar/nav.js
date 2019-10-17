/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import NavLayout from "./nav-layout"
import NavLinksDefault from "./nav-links-default"
import NavLinksAnchor from "./nav-links-anchor"
import NavLinksBlended from "./nav-links-blended"
import SocialWrapper from "./nav-social-wrapper"
import SocialHeaderIcons from "./nav-social-icons"

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
    <NavLayout>
      <NavLinks />
      <SocialWrapper>
        <SocialHeaderIcons />
      </SocialWrapper>
    </NavLayout>
  )
}

export default SiteNav
