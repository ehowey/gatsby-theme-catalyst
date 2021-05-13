/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { lighten } from "@theme-ui/color"

const HomeDemo = () => {
  const data = useStaticQuery(
    graphql`
      {
        layout: file(relativePath: { eq: "catalyst-layout.png" }) {
          childImageSharp {
            gatsbyImageData(height: 400, layout: CONSTRAINED)
          }
        }
        presentation: file(relativePath: { eq: "lithium-post.png" }) {
          childImageSharp {
            gatsbyImageData(height: 400, layout: CONSTRAINED)
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
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: [
            "minmax(0, 1fr)",
            null,
            "minmax(0, 1fr) minmax(0, 1fr)",
            null,
            null,
          ],
          gridGap: 5,
          margin: "0 auto",
          maxWidth: "maxPageWidth",
        }}
      >
        <div>
          <div sx={{ p: 3, bg: lighten("primary", 0.4), borderRadius: "4px" }}>
            <GatsbyImage
              sx={{
                height: "300px",
                width: "100%",
                borderRadius: "4px",
              }}
              image={data.layout.childImageSharp.gatsbyImageData}
              alt="Layout theme example"
              imgStyle={{ objectFit: "contain" }}
            />
          </div>
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
            Layout themes
          </Themed.h3>
          <Themed.p>Raw, unstyled, ready to be customized!</Themed.p>
          <Themed.a
            href="https://gatsby-starter-catalyst.netlify.app/"
            sx={{ fontSize: 2 }}
          >
            Live demo &rarr;
          </Themed.a>
        </div>
        <div>
          <div sx={{ p: 3, bg: lighten("primary", 0.4), borderRadius: "4px" }}>
            <GatsbyImage
              sx={{ height: "300px", width: "100%" }}
              image={data.presentation.childImageSharp.gatsbyImageData}
              alt="Presentation theme example"
              imgStyle={{ objectFit: "contain" }}
            />
          </div>
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
            Presentation themes
          </Themed.h3>
          <Themed.p>Refined, styled and ready for launch!</Themed.p>
          <Themed.a
            href="https://gatsby-starter-catalyst-lithium.netlify.app/"
            sx={{ fontSize: 2 }}
          >
            Live demo &rarr;
          </Themed.a>
        </div>
      </div>
    </div>
  )
}

export default HomeDemo
