/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import FeaturedLogos from "../featured-logos"
import FeaturedWork from "../featured-work"
import SanityContent from "../sanity/sanity-content"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityHomePage {
        _rawContactText
        contactTitle
        heroTitle
        featuredTitle
        logoTitle
      }
    }
  `)

  const title = data.sanityHomePage.heroTitle
  const logoTitle = data.sanityHomePage.logoTitle
  const featuredTitle = data.sanityHomePage.featuredTitle
  const contactTitle = data.sanityHomePage.contactTitle
  const contactData = data.sanityHomePage._rawContactText

  return (
    <Fragment>
      <Styled.h2>{logoTitle}</Styled.h2>
      <FeaturedLogos />
      <Styled.h2>{featuredTitle}</Styled.h2>
      <FeaturedWork />
      <Styled.h2>{contactTitle}</Styled.h2>
      <SanityContent data={contactData} />
    </Fragment>
  )
}

export default HomePage
