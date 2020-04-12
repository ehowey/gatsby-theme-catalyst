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
          <Styled.h3 sx={{ mb: 3 }}>Layout Themes</Styled.h3>
          <Img fluid={data.layout.childImageSharp.fluid} />
        </div>
        <div>
          <Styled.h3 sx={{ mb: 3 }}>Data Themes</Styled.h3>
          <Img fluid={data.sanity.childImageSharp.fluid} />
        </div>
        <div>
          <Styled.h3 sx={{ mb: 3 }}>Presentation Themes</Styled.h3>
          <Img fluid={data.presentation.childImageSharp.fluid} />
        </div>
        <div>
          <Styled.h3>Theme-UI</Styled.h3>
          <Styled.p>
            Theme-UI is used extensively throughout Gatsby Theme Catalyst to
            control most aspects of the visual design including fonts, colors,
            spacing, etc.
          </Styled.p>
        </div>
        <div>
          <Styled.h3>MDX</Styled.h3>
          <Styled.p>
            MDX is a first class citizen in Gatsby Theme Catalyst and the
            default content authoring format.
          </Styled.p>
        </div>
        <div>
          <Styled.h3>Theme Options</Styled.h3>
          <Styled.p>
            Theme options are used to make it easier to customize the themes or
            pass information to source plugins.
          </Styled.p>
        </div>
      </Grid>
    </div>
  )
}

export default Features
