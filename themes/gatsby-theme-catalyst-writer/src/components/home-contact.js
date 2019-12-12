/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import SanityContent from "./sanity/sanity-content"

const HomeContact = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityHomePage {
        contactTitle
        _rawContactText
      }
    }
  `)
  const result = data.sanityHomePage
  return (
    <Fragment>
      <Styled.h2>{result.contactTitle}</Styled.h2>
      <SanityContent data={result._rawContactText} />
    </Fragment>
  )
}

export default HomeContact
