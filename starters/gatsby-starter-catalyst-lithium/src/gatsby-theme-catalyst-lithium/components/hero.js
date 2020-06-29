/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import { darken } from "@theme-ui/color"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { RoughNotation } from "react-rough-notation"
import { useHasMounted } from "gatsby-theme-catalyst-core"
import { Fragment } from "react"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const heroImage = data.heroImage.childImageSharp.fluid
  const hasMounted = useHasMounted()
  return (
    <div
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mb: 4,
      }}
    >
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", null, "1fr 1fr", null, null],
          alignItems: "center",
          gridGap: [0, null, 5, null, null],
          mx: [3, null, 5, null, null],
        }}
      >
        <Img
          fluid={heroImage}
          imgStyle={{ objectFit: "contain" }}
          sx={{
            gridColumn: ["1 / -1", null, "2 / 3", null, null],
            gridRow: "1 / 2",
            maxHeight: ["200px", "300px", "400px", null, "500px"],
          }}
        />
        <div
          sx={{
            gridColumn: ["1 / -1", null, "1 / 2", null, null],
            gridRow: ["2 / 3", null, "1 / 2", null, null],
          }}
        >
          <Styled.p sx={{ fontSize: [3, null, null, null, 4] }}>
            I grow vegetables, flowers and community. I build remarkable online
            experiences focused on{" "}
            {hasMounted ? (
              <Fragment>
                <RoughNotation type="underline" show={true} strokeWidth={2}>
                  connection
                </RoughNotation>
                <span> and </span>
                <RoughNotation type="underline" show={true} strokeWidth={2}>
                  belonging.
                </RoughNotation>
              </Fragment>
            ) : (
              "connection and belonging."
            )}
          </Styled.p>
          <Button
            as={Link}
            to="/contact"
            sx={{
              bg: "#2b6cb0",
              fontSize: [2, null, null, null, 3],
              transition: "all 0.3s ease-in-out",
              ":hover": {
                bg: darken("#2b6cb0", 0.08),
              },
            }}
          >
            Grow With Me
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
