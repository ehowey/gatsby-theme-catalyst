/** @jsx jsx */
import { jsx } from "theme-ui"
import HomeHero from "./home-hero"
import HomeLogos from "./home-logos"
import HomeWork from "./home-work"
import HomeContact from "./home-contact"
import { SEO, Layout } from "gatsby-theme-catalyst-core"

const HomePage = ({ data }) => {
  const result = data.allSanityHomePage.nodes[0]
  return (
    <Layout>
      <SEO title={result.seoTitle} />
      <HomeHero />
      <HomeLogos />
      <HomeWork />
      <HomeContact />
    </Layout>
  )
}

export default HomePage
