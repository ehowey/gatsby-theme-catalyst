/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import clientConfig from "./client-config"
import serializers from "./serializers"

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

  return (
    <Fragment>
      {pageData.map(page => (
        <PortableText
          key={page.id}
          blocks={page._rawContact}
          serializers={serializers}
          {...clientConfig.sanity}
        />
      ))}
    </Fragment>
  )
}

export default HomeContact
