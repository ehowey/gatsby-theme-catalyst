/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import TopNavHeader from "./topnav/header"
import AnchorNavHeader from "./anchornav/header"
import BlendedNavHeader from "./blendednav/header"

const SiteHeader = props => {
  const data = useStaticQuery(graphql`
    query {
      catalystConfig {
        headerType
      }
    }
  `)
  if (data.catalystConfig.headerType === "topnav") {
    return <TopNavHeader {...props} />
  } else if (data.catalystConfig.headerType === "anchornav") {
    return <AnchorNavHeader {...props} />
  } else if (data.catalystConfig.headerType === "blendednav") {
    return <BlendedNavHeader {...props} />
  } else {
    return null
  }
}

export default SiteHeader
