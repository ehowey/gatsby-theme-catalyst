/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import HomeHero from "../home-hero"
import HomeLogos from "../home-logos"
import HomeWork from "../home-work"
import HomeContact from "../home-contact"
import { SEO } from "gatsby-theme-catalyst-core"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityHomePage(limit: 1, sort: { fields: _updatedAt, order: DESC }) {
        nodes {
          seoTitle
        }
      }
    }
  `)

  const result = data.allSanityHomePage.nodes[0]

  return (
    <Fragment>
      <SEO title={result.seoTitle} />
      <HomeHero />
      <HomeLogos />
      <HomeWork />
      <HomeContact />
    </Fragment>
  )
}

export default HomePage
