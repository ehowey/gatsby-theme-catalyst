/** @jsx jsx */
import { jsx } from "theme-ui"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"
import Logo from "./branding-logo"
import Title from "./branding-title"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"

const SiteBranding = () => {
  const [isMobile] = useContext(MobileContext)

  const {
    displaySiteLogo,
    displaySiteTitle,
    displaySiteTitleMobile,
    displaySiteLogoMobile,
  } = useCatalystConfig()

  return (
    <div
      sx={{
        gridColumn: ["2 / 3", null, "1 / -1", null, null],
        gridRow: "1 / 2",
        display: "flex",
        flexDirection: ["row", null, "column", null, null],
        alignItems: "center",
        justifyContent: "center",
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
