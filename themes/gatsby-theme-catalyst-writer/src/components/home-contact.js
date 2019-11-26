/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useSanityConfig } from "./sanity/use-sanity-config"
import PortableText from "@sanity/block-content-to-react"
import serializers from "./sanity/serializers"

const HomeContact = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityHomePage(sort: { fields: _updatedAt, order: DESC }, limit: 1) {
        nodes {
          id
          _rawContact
        }
      }
    }
  `)

  const pageData = data.allSanityHomePage.nodes
  const sanityConfig = useSanityConfig()

  return (
    <Fragment>
      {pageData.map(page => (
        <PortableText
          key={page.id}
          blocks={page._rawContact}
          serializers={serializers}
          {...sanityConfig}
        />
      ))}
    </Fragment>
  )
}

export default HomeContact
