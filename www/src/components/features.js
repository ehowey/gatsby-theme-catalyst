/** @jsx jsx */
import { jsx, Grid, Themed } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import FeatureCard from "./feature-card"

const Features = () => {
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
        netlify: file(relativePath: { eq: "netlify-logo.png" }) {
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
          text="MDX lets you seamlessly write JSX in your Markdown documents. It is the default content authoring format in Gatsby Theme Catalyst."
        />
        <FeatureCard
          image={data.sanity.childImageSharp.gatsbyImageData}
          title="SANITY.io"
          text="SANITY.io is used as an optional backend adding an extendable and powerful headless CMS and database solution at your fingertips."
        />
        <FeatureCard
          image={data.themeui.childImageSharp.gatsbyImageData}
          title="Theme-UI"
          text="Theme UI is used for styling enabling a consistent visual design language through a global context aware theme file."
        />
        <FeatureCard
          image={data.framer.childImageSharp.gatsbyImageData}
          title="Framer Motion"
          text="Framer Motion is used as the default animation library due to the intuitive API and excellent documentation."
        />
        <div>
          <GatsbyImage
            image={data.stripe.childImageSharp.gatsbyImageData}
            alt="Stripe"
          />
          <Themed.h3
            sx={{
              fontSize: 3,
              mb: 3,
              "::after": {
                display: "block",
                content: '""',
                width: "40px",
                pt: 1,
                borderBottomStyle: "solid",
                borderBottomWidth: "2px",
                borderBottomColor: "primary",
              },
            }}
          >
            Stripe
          </Themed.h3>
          <Themed.p>
            Stripe is used with{" "}
            <Themed.a href="https://useshoppingcart.com/">
              use-shopping-cart
            </Themed.a>{" "}
            to provide basic e-commerce integration for when you just need to
            make some money!
          </Themed.p>
        </div>
        {/* <FeatureCard
          image={data.stripe.childImageSharp.gatsbyImageData}
          title="Stripe"
          text={`Stripe is used with
          )}to provide a basic e-commerce integration for when you just need to make some money!`}
        /> */}
        <FeatureCard
          image={data.netlify.childImageSharp.gatsbyImageData}
          title="Netlify"
          text="Netlify functions are used to provide cart validation and manage purchases when integrating with Stripe."
        />
      </Grid>
    </div>
  )
}

export default Features
