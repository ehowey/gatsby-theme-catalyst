/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ButtonPrimary from "./button-primary"
import ButtonSecondary from "./button-secondary"
import SanityContent from "./sanity/sanity-content"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityHomePage(limit: 1, sort: { fields: _updatedAt, order: DESC }) {
        nodes {
          heroTitle
          _rawHeroText
          heroImage {
            asset {
              fluid(maxWidth: 1024) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)
  const hero = data.allSanityHomePage.nodes[0]
  return (
    <section
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mt: -3,
        mb: 5,
      }}
    >
      <div
        sx={{
          width: "100%",
          backgroundColor: "accent",
        }}
      >
        <div
          sx={{
            display: "flex",
            flexDirection: ["column", null, "row", null, null],
            width: "100%",
            height: ["auto", null, "auto", null, null],
            minHeight: ["initial", null, "500px", null, null],
            backgroundColor: "accent",
            maxWidth: "maxPageWidth",
            mx: "auto",
            my: 0,
          }}
        >
          <Img
            sx={{
              width: "100%",
              height: ["300px", null, "auto", null, null],
            }}
            fluid={hero.heroImage.asset.fluid}
            alt={hero.heroTitle}
          />
          <div
            sx={{
              alignSelf: "center",
              py: [5, null, 4, null, null],
              px: [3, null, 4, null, null],
            }}
          >
            <h1
              sx={{
                fontFamily: "heading",
                fontWeight: "heading",
                lineHeight: "heading",
                fontSize: 6,
                borderColor: "primary",
                borderTopWidth: "8px",
                borderBottomWidth: "8px",
                borderTopStyle: "dotted",
                borderBottomStyle: "dotted",
                m: 0,
                py: 4,
                mt: 0,
                mb: 4,
              }}
            >
              {hero.heroTitle}
            </h1>
            <div sx={{ mt: 0, mb: 4 }}>
              <SanityContent data={hero._rawHeroText} />
            </div>
            <div
              sx={{
                display: "grid",
                gridGap: [3, 4, null, null, null],
                gridTemplateColumns: [
                  "auto",
                  "auto auto 1fr",
                  null,
                  null,
                  null,
                ],
                justifyItems: ["stretch", "start", null, null, null],
              }}
            >
              <ButtonPrimary to="/work">Published Work</ButtonPrimary>
              <ButtonSecondary to="/bio">Bio</ButtonSecondary>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
