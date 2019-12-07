/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Fragment } from "react"
import { useContext } from "react"
import { HomeContext } from "gatsby-theme-catalyst-core"
import ButtonPrimary from "../../components/button-primary"
import ButtonSecondary from "../../components/button-secondary"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityHomePage(sort: { fields: _updatedAt, order: DESC }, limit: 1) {
        nodes {
          id
          heroTitle
          heroText
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
  const [isHome] = useContext(HomeContext)
  const hero = data.allSanityHomePage.nodes
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
          {hero.map(content => (
            <Fragment key={content.id}>
              <Img
                sx={{
                  width: "100%",
                  height: ["300px", null, "auto", null, null],
                }}
                fluid={content.heroImage.asset.fluid}
                alt={hero.title}
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
                    borderColor: "secondary",
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
                  {content.heroTitle}
                </h1>
                <Styled.p sx={{ mt: 0, mb: 4 }}>{content.heroText}</Styled.p>
                <div
                  sx={{
                    display: "grid",
                    gridGap: [2, 4, null, null, null],
                    gridTemplateColumns: "auto auto 1fr",
                    justifyItems: "start",
                  }}
                >
                  <ButtonPrimary to="/work">Published Work</ButtonPrimary>
                  <ButtonSecondary to="/bio">Bio</ButtonSecondary>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Hero
