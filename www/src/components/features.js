/** @jsx jsx */
import { jsx, Styled, Grid } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Features = () => {
  const data = useStaticQuery(
    graphql`
      query {
        layout: file(relativePath: { eq: "gatsby-starter-catalyst.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 512) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        sanity: file(relativePath: { eq: "sanity-studio.png" }) {
          childImageSharp {
            fluid(maxHeight: 512) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        presentation: file(
          relativePath: { eq: "gatsby-starter-hydrogen.jpg" }
        ) {
          childImageSharp {
            fluid(maxHeight: 512) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        themeui: file(relativePath: { eq: "theme-ui.png" }) {
          childImageSharp {
            fluid(maxHeight: 512) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        themeoptions: file(relativePath: { eq: "theme-options.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 512) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mdx: file(relativePath: { eq: "mdx-logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 512) {
              ...GatsbyImageSharpFluid_withWebp
            }
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
        gap={4}
        sx={{
          margin: "0 auto",
          maxWidth: "maxPageWidth",
        }}
      >
        <div>
          <Img fluid={data.layout.childImageSharp.fluid} />
          <Styled.h3 sx={{ mb: 4 }}>Layout Themes</Styled.h3>
          <Styled.p>
            Minimally styled themes that focus on layout, function, and utility
            components. These can be used as a solid foundation to build a fully
            custom site.
          </Styled.p>
        </div>
        <div>
          <Img fluid={data.sanity.childImageSharp.fluid} />
          <Styled.h3 sx={{ mb: 4 }}>Data Themes</Styled.h3>
          <Styled.p>
            Adds an optional data structure on top of the layout themes to
            provide additional content authoring experiences. SANITY.io and an
            MDX blog are currently supported this way.
          </Styled.p>
        </div>
        <div>
          <Img fluid={data.presentation.childImageSharp.fluid} />
          <Styled.h3 sx={{ mb: 4 }}>Presentation Themes</Styled.h3>
          <Styled.p>
            Adds visual components and specialized layouts like a custom home
            page. These themes are designed to be modified for branding (colors,
            logos, fonts, etc).
          </Styled.p>
        </div>
        <div>
          <Img fluid={data.themeui.childImageSharp.fluid} />
          <Styled.h3>Theme-UI</Styled.h3>
          <Styled.p>
            Theme UI enables you to quickly customize the visual design of your
            user interfaces using key-value pairs to modify colors, fonts,
            spacings, and more.
          </Styled.p>
        </div>
        <div>
          <Img fluid={data.mdx.childImageSharp.fluid} />
          <Styled.h3>MDX</Styled.h3>
          <Styled.p>
            MDX lets you seamlessly write JSX in your Markdown documents. It is
            the default content authoring format in Gatsby Theme Catalyst.
          </Styled.p>
        </div>
        <div>
          <Img fluid={data.themeoptions.childImageSharp.fluid} />
          <Styled.h3>Theme Options</Styled.h3>
          <Styled.p>
            Theme options are used as feature flags to toggle small changes to
            your design, like displaying social media links, without having to
            rewrite code.
          </Styled.p>
        </div>
      </Grid>
    </div>
  )
}

export default Features
