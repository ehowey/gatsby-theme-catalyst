//Delete this or modify it to make you own hero compoment.  You can also just remove it enitrely by setting useHero to false in the theme options contained in gatsby-config.js file.
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "@theme-ui/components"

const HeaderHero = () => {
  const data = useStaticQuery(graphql`
    query {
      gatsby: file(relativePath: { eq: "gatsby-logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mdx: file(relativePath: { eq: "mdx-logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section
      sx={{
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        bg: "palegreen",
        px: 3,
      }}
    >
      <div
        sx={{
          maxWidth: "maxContentWidth",
          margin: "0 auto",
        }}
      >
        <Styled.h1
          sx={{
            textAlign: "center",
          }}
        >
          Gatsby-Theme-Catalyst
        </Styled.h1>
        <div
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
            py: 2,
          }}
        >
          <Img
            sx={{
              height: "60px",
              width: "60px",
            }}
            fluid={data.gatsby.childImageSharp.fluid}
            alt="Gatsby"
          />
          <Styled.h2 as="p">+</Styled.h2>
          <Img
            sx={{
              height: "100px",
              width: "100px",
            }}
            fluid={data.mdx.childImageSharp.fluid}
            alt="MDX"
          />
          <Styled.h2 as="p">+</Styled.h2>
          <Styled.h2 as="p">Theme-UI</Styled.h2>
        </div>
        <Styled.p>
          Hero area toggled via "useHero" setting in
          `gatsby-theme-catalyst-core`. Edit this in
          `src/gatsby-theme-catalyst-core/components/hero.js`.
        </Styled.p>
      </div>
    </section>
  )
}

export default HeaderHero
