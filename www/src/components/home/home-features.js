/** @jsx jsx */
import { jsx, Grid, Themed } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import FeatureCard from "./home-feature-card"

const HomeFeatures = () => {
  const data = useStaticQuery(
    graphql`
      {
        themeui: file(relativePath: { eq: "theme-ui.png" }) {
          childImageSharp {
            gatsbyImageData(height: 512, layout: CONSTRAINED)
          }
        }
        sanity: file(relativePath: { eq: "sanity-logo.png" }) {
          childImageSharp {
            gatsbyImageData(height: 512, layout: CONSTRAINED)
          }
        }
        mdx: file(relativePath: { eq: "mdx-logo.png" }) {
          childImageSharp {
            gatsbyImageData(height: 512, layout: CONSTRAINED)
          }
        }
        framer: file(relativePath: { eq: "framer-logo.png" }) {
          childImageSharp {
            gatsbyImageData(height: 512, layout: CONSTRAINED)
          }
        }
        stripe: file(relativePath: { eq: "stripe-logo.png" }) {
          childImageSharp {
            gatsbyImageData(height: 512, layout: CONSTRAINED)
          }
        }
        cypress: file(relativePath: { eq: "cypress-logo.png" }) {
          childImageSharp {
            gatsbyImageData(height: 512, layout: CONSTRAINED)
          }
        }
      }
    `
  )

  return (
    <div
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        px: 4,
      }}
    >
      <Grid
        columns={[1, null, 2, 3, null]}
        gap={5}
        sx={{
          margin: "0 auto",
          maxWidth: "maxPageWidth",
        }}
      >
        <FeatureCard
          image={data.mdx.childImageSharp.gatsbyImageData}
          title="MDX"
        >
          <Themed.p>
            <Themed.a href="https://mdxjs.com/">MDX</Themed.a> lets you
            seamlessly write JSX in your Markdown documents. It is the default
            content authoring format in Gatsby Theme Catalyst.
          </Themed.p>
        </FeatureCard>
        <FeatureCard
          image={data.sanity.childImageSharp.gatsbyImageData}
          title="SANITY"
        >
          <Themed.p>
            <Themed.a href="https://www.sanity.io/">SANITY.io</Themed.a> is used
            as an optional backend adding an extendable and powerful headless
            CMS and database solution at your fingertips
          </Themed.p>
        </FeatureCard>
        <FeatureCard
          image={data.themeui.childImageSharp.gatsbyImageData}
          title="Theme-UI"
        >
          <Themed.p>
            <Themed.a href="https://theme-ui.com/">Theme UI</Themed.a> is used
            for styling enabling a consistent visual design language through a
            global context aware theme file
          </Themed.p>
        </FeatureCard>
        <FeatureCard
          image={data.framer.childImageSharp.gatsbyImageData}
          title="Framer Motion"
        >
          <Themed.p>
            <Themed.a href="https://www.framer.com/motion/">
              Framer Motion
            </Themed.a>{" "}
            is used as the default animation library due to the intuitive API
            and excellent documentation.
          </Themed.p>
        </FeatureCard>
        <FeatureCard
          image={data.stripe.childImageSharp.gatsbyImageData}
          title="Stripe"
        >
          <Themed.p>
            Stripe is used with{" "}
            <Themed.a href="https://useshoppingcart.com/">
              use-shopping-cart
            </Themed.a>{" "}
            to provide basic e-commerce integration for when you just need to
            make some money! Coming soon &trade;.
          </Themed.p>
        </FeatureCard>
        <FeatureCard
          image={data.cypress.childImageSharp.gatsbyImageData}
          title="Cypress"
        >
          <Themed.p>
            <Themed.a href="https://www.cypress.io/">Cypress.io</Themed.a>{" "}
            provides end-to-end testing integration for the themes and starters
            so you can trust every deploy!
          </Themed.p>
        </FeatureCard>
      </Grid>
    </div>
  )
}

export default HomeFeatures
