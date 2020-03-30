/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui"
import HomeHero from "./home-hero"
import HomeLogos from "./home-logos"
import HomeWork from "./home-work"
import HomeContact from "./home-contact"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { sanityTheme } from "gatsby-theme-catalyst-sanity"

const HomePage = ({ data }) => {
  const result = data.allSanityHomePage.nodes[0]
  return (
    <ThemeProvider theme={sanityTheme}>
      <Layout>
        <SEO title={result.seoTitle} />
        <HomeHero />
        <HomeLogos />
        <HomeWork />
        <HomeContact />
      </Layout>
    </ThemeProvider>
  )
}

export default HomePage
