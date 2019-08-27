/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "./siteLogo"
import Title from "./siteTitle"

const siteBranding = props => {
  const data = useStaticQuery(graphql`
    query {
      catalystConfig {
        displaySiteLogo
        displaySiteTitle
      }
    }
  `)
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        ml: 2,
        mr: 2,
      }}
    >
      {data.catalystConfig.displaySiteLogo ? <Logo {...props} /> : null}
      {data.catalystConfig.displaySiteTitle ? <Title {...props} /> : null}
    </div>
  )
}

export default siteBranding
