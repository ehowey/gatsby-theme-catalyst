/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import HomeLogos from "../home-logos"
import HomeWork from "../home-work"
import HomeContact from "../home-contact"
import { SEO } from "gatsby-theme-catalyst-core"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityHomePage {
        seoTitle
      }
    }
  `)

  const result = data.sanityHomePage

  return (
    <Fragment>
      <SEO title={result.seoTitle} />
      <HomeLogos />
      <HomeWork />
      <HomeContact />
    </Fragment>
  )
}

export default HomePage
