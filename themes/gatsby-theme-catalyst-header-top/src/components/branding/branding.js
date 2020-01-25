/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"
import Logo from "./branding-logo"
import Title from "./branding-title"
import { MobileContext } from "gatsby-theme-catalyst-core"

const SiteBranding = () => {
  const {
    displaySiteLogo,
    displaySiteTitle,
    displaySiteTitleMobile,
    displaySiteLogoMobile,
  } = useCatalystConfig()
  const [isMobile] = useContext(MobileContext)

  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        ml: 2,
        mr: 2,
      }}
    >
      {isMobile
        ? displaySiteLogoMobile && <Logo />
        : displaySiteLogo && <Logo />}
      {isMobile
        ? displaySiteTitleMobile && <Title />
        : displaySiteTitle && <Title />}
    </div>
  )
}

export default SiteBranding
