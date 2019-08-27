/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import TopNavHeader from "./topnav/header"
import AnchorNavHeader from "./anchornav/header"

const siteHeader = props => {
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
  } else {
    return null
  }
}

export default siteHeader
