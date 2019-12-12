/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useContext } from "react"
import { HomeContext } from "gatsby-theme-catalyst-core"
import ButtonPrimary from "../../components/button-primary"
import ButtonSecondary from "../../components/button-secondary"
import SanityContent from "../../components/sanity/sanity-content"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityHomePage {
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
  `)
  const [isHome] = useContext(HomeContext)
  const hero = data.sanityHomePage
  if (isHome) {
    return (
      <div
        sx={{
          width: "100%",
          backgroundColor: "accent",
          mb: 4,
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
    )
  } else {
    return null
  }
}

export default Hero
