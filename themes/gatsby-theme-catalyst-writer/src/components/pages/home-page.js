/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import FeaturedLogos from "../featured-logos"
import FeaturedWork from "../featured-work"
import SanityContent from "../sanity/sanity-content"
import { SEO } from "gatsby-theme-catalyst-core"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityHomePage {
        seoTitle
        _rawContactText
        contactTitle
        heroTitle
        featuredTitle
        logoTitle
      }
    }
  `)

  const result = data.sanityHomePage

  return (
    <Fragment>
      <SEO title={result.seoTitle} />
      <Styled.h2>{result.logoTitle}</Styled.h2>
      <FeaturedLogos />
      <Styled.h2>{result.featuredTitle}</Styled.h2>
      <FeaturedWork />
      <Styled.h2>{result.contactTitle}</Styled.h2>
      <SanityContent data={result._rawContactText} />
    </Fragment>
  )
}

export default HomePage
