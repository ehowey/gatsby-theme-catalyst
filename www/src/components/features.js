/** @jsx jsx */
import { jsx, Themed, Grid } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Features = () => {
  const data = useStaticQuery(
    graphql`
      {
        layout: file(relativePath: { eq: "gatsby-starter-catalyst.jpg" }) {
          childImageSharp {
            gatsbyImageData(height: 512, layout: FULL_WIDTH)
          }
        }
        sanity: file(relativePath: { eq: "sanity-studio.png" }) {
          childImageSharp {
            gatsbyImageData(height: 512, layout: FULL_WIDTH)
          }
        }
        presentation: file(
          relativePath: { eq: "gatsby-starter-hydrogen.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(height: 512, layout: FULL_WIDTH)
          }
        }
        themeui: file(relativePath: { eq: "theme-ui.png" }) {
          childImageSharp {
            gatsbyImageData(height: 512, layout: FULL_WIDTH)
          }
        }
        themeoptions: file(relativePath: { eq: "theme-options.jpg" }) {
          childImageSharp {
            gatsbyImageData(height: 512, layout: FULL_WIDTH)
          }
        }
        mdx: file(relativePath: { eq: "mdx-logo.png" }) {
          childImageSharp {
            gatsbyImageData(height: 512, layout: FULL_WIDTH)
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
          <GatsbyImage
            image={data.layout.childImageSharp.gatsbyImageData}
            alt="Layout theme"
          />
          <Themed.h3
            sx={{
              fontSize: 4,
              mb: 3,
              "::after": {
                display: "block",
                content: '""',
                width: "40px",
                pt: 1,
                borderBottomStyle: "solid",
                borderBottomWidth: "4px",
                borderBottomColor: "primary",
              },
            }}
          >
            Layout Themes
          </Themed.h3>
          <Themed.p>
            Minimally styled themes that focus on layout, function, and utility
            components. These can be used as a solid foundation to build a fully
            custom site.
          </Themed.p>
        </div>
        <div>
          <GatsbyImage
            image={data.sanity.childImageSharp.gatsbyImageData}
            alt="Sanity Studio Dashboard"
          />
          <Themed.h3
            sx={{
              fontSize: 4,
              mb: 3,
              "::after": {
                display: "block",
                content: '""',
                width: "40px",
                pt: 1,
                borderBottomStyle: "solid",
                borderBottomWidth: "4px",
                borderBottomColor: "primary",
              },
            }}
          >
            Data Themes
          </Themed.h3>
          <Themed.p>
            Adds an optional data structure on top of the layout themes to
            provide additional content authoring experiences. SANITY.io and an
            MDX blog are currently supported this way.
          </Themed.p>
        </div>
        <div>
          <GatsbyImage
            image={data.presentation.childImageSharp.gatsbyImageData}
            alt="Presentation Theme"
          />
          <Themed.h3
            sx={{
              fontSize: 4,
              mb: 3,
              "::after": {
                display: "block",
                content: '""',
                width: "40px",
                pt: 1,
                borderBottomStyle: "solid",
                borderBottomWidth: "4px",
                borderBottomColor: "primary",
              },
            }}
          >
            Presentation Themes
          </Themed.h3>
          <Themed.p>
            Adds visual components and specialized layouts like a custom home
            page. These themes are designed to be modified for branding (colors,
            logos, fonts, etc).
          </Themed.p>
        </div>
        <div>
          <GatsbyImage
            image={data.themeui.childImageSharp.gatsbyImageData}
            alt="Theme UI Logo"
          />
          <Themed.h3
            sx={{
              fontSize: 4,
              mb: 3,
              "::after": {
                display: "block",
                content: '""',
                width: "40px",
                pt: 1,
                borderBottomStyle: "solid",
                borderBottomWidth: "4px",
                borderBottomColor: "primary",
              },
            }}
          >
            Theme-UI
          </Themed.h3>
          <Themed.p>
            Theme UI enables you to quickly customize the visual design of your
            user interfaces using key-value pairs to modify colors, fonts,
            spacings, and more.
          </Themed.p>
        </div>
        <div>
          <GatsbyImage
            image={data.mdx.childImageSharp.gatsbyImageData}
            alt="MDX Logo"
          />
          <Themed.h3
            sx={{
              fontSize: 4,
              mb: 3,
              "::after": {
                display: "block",
                content: '""',
                width: "40px",
                pt: 1,
                borderBottomStyle: "solid",
                borderBottomWidth: "4px",
                borderBottomColor: "primary",
              },
            }}
          >
            MDX
          </Themed.h3>
          <Themed.p>
            MDX lets you seamlessly write JSX in your Markdown documents. It is
            the default content authoring format in Gatsby Theme Catalyst.
          </Themed.p>
        </div>
        <div>
          <GatsbyImage
            image={data.themeoptions.childImageSharp.gatsbyImageData}
            alt="Example of theme options"
          />
          <Themed.h3
            sx={{
              fontSize: 4,
              mb: 3,
              "::after": {
                display: "block",
                content: '""',
                width: "40px",
                pt: 1,
                borderBottomStyle: "solid",
                borderBottomWidth: "4px",
                borderBottomColor: "primary",
              },
            }}
          >
            Theme Options
          </Themed.h3>
          <Themed.p>
            Theme options are used as feature flags to toggle small changes to
            your design, like displaying social media links, without having to
            rewrite code.
          </Themed.p>
        </div>
      </Grid>
    </div>
  )
}

export default Features
