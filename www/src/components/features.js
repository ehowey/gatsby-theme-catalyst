/** @jsx jsx */
import { jsx, Styled, Grid } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Features = () => {
  const data = useStaticQuery(
    graphql`
      query {
        layout: file(relativePath: { eq: "gatsby-starter-catalyst.png" }) {
          childImageSharp {
            fluid(maxHeight: 512) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        sanity: file(relativePath: { eq: "gatsby-starter-sanity.png" }) {
          childImageSharp {
            fluid(maxHeight: 512) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        presentation: file(
          relativePath: { eq: "gatsby-starter-hydrogen.png" }
        ) {
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
          <Styled.h3 sx={{ mb: 4 }}>Layout Themes</Styled.h3>
          <Img fluid={data.layout.childImageSharp.fluid} />
        </div>
        <div>
          <Styled.h3 sx={{ mb: 4 }}>Data Themes</Styled.h3>
          <Img fluid={data.sanity.childImageSharp.fluid} />
        </div>
        <div>
          <Styled.h3 sx={{ mb: 4 }}>Presentation Themes</Styled.h3>
          <Img fluid={data.presentation.childImageSharp.fluid} />
        </div>
        <div>
          <Styled.h3>Theme-UI</Styled.h3>
          <Styled.p>
            Theme-UI gives you dashboard-like control your visual design through
            key-value pairs including fonts, colors, spacing, etc.
          </Styled.p>
        </div>
        <div>
          <Styled.h3>MDX</Styled.h3>
          <Styled.p>
            MDX is a foundational part of Gatsby Theme Catalyst and the
            suggested content authoring format.
          </Styled.p>
        </div>
        <div>
          <Styled.h3>Theme Options</Styled.h3>
          <Styled.p>
            Theme options are used as feature flags to enable quick changes your
            design without having to rewrite code.
          </Styled.p>
        </div>
      </Grid>
    </div>
  )
}

export default Features
