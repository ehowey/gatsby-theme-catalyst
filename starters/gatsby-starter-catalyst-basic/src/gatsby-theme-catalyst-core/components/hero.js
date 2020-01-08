//Delete this or modify it to make you own hero compoment.  You can also just remove it enitrely by setting useHero to false in the theme options contained in gatsby-config.js file.
/** @jsx jsx */
import { jsx, Styled, useColorMode } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { useContext } from "react"
import { HomeContext } from "gatsby-theme-catalyst-core"
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
      gatsbyWhite: file(relativePath: { eq: "gatsby-logo-white.png" }) {
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
      mdxWhite: file(relativePath: { eq: "mdx-logo-white.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const [isHome] = useContext(HomeContext)
  const [mode] = useColorMode()
  const isDark = mode === "dark"

  if (isHome) {
    return (
      <div
        sx={{
          bg: "accent",
          px: 3,
        }}
        role="complementary"
        aria-label="Hero Section"
      >
        <div
          sx={{
            maxWidth: "maxContentWidth",
            mx: "auto",
            my: 5,
          }}
        >
          <Styled.h1 as="p">Gatsby Theme Catalyst</Styled.h1>
          <div
            sx={{
              display: "grid",
              gridTemplateColumns: "60px auto 100px auto auto",
              gridTemplateRows: "auto",
              gridGap: 3,
              placeItems: "center",
              justifyContent: "start",
              py: 3,
            }}
          >
            <Img
              sx={{
                width: "100%",
              }}
              fluid={
                isDark
                  ? data.gatsbyWhite.childImageSharp.fluid
                  : data.gatsby.childImageSharp.fluid
              }
              alt="Gatsby"
            />
            <Styled.h2 as="p" sx={{ color: "primary" }}>
              +
            </Styled.h2>
            <Img
              sx={{
                width: "100%",
              }}
              fluid={
                isDark
                  ? data.mdxWhite.childImageSharp.fluid
                  : data.mdx.childImageSharp.fluid
              }
              alt="MDX"
            />
            <Styled.h2 as="p" sx={{ color: "primary" }}>
              +
            </Styled.h2>
            <Styled.h2 as="p">Theme-UI</Styled.h2>
          </div>
          <Button as="a" href="https://github.com/ehowey/gatsby-theme-catalyst">
            Documentation
          </Button>
          <Styled.p
            sx={{
              color: "text",
              fontSize: 1,
              mt: 4,
              opacity: "0.8",
            }}
          >
            Hero area toggled via "useHero" setting in{" "}
            <code>gatsby-theme-catalyst-core</code>.<br />
            Edit this in{" "}
            <code>src/gatsby-theme-catalyst-core/components/hero.js</code>.
          </Styled.p>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default HeaderHero
