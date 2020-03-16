/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import SanityContent from "./sanity/sanity-content"

const HomeContact = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityHomePage(limit: 1, sort: { fields: _updatedAt, order: DESC }) {
        nodes {
          contactTitle
          _rawContactText
        }
      }
    }
  `)
  const result = data.allSanityHomePage.nodes[0]
  return (
    <Fragment>
      <Styled.h2>{result.contactTitle}</Styled.h2>
      <SanityContent data={result._rawContactText} />
    </Fragment>
  )
}

export default HomeContact
