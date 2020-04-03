/** @jsx jsx */
import { jsx } from "theme-ui"
import HomeHero from "./home-hero"
import HomeLogos from "./home-logos"
import HomeWork from "./home-work"
import HomeContact from "./home-contact"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { SanityThemeProvider } from "gatsby-theme-catalyst-sanity"

const HomePage = ({ data }) => {
  const result = data.allSanityHomePage.nodes[0]
  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title={result.seoTitle} />
        <HomeHero />
        <HomeLogos />
        <HomeWork />
        <HomeContact />
      </Layout>
    </SanityThemeProvider>
  )
}

export default HomePage
