/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import { darken, lighten } from "@theme-ui/color"
import { baseColors } from "@theme-ui/preset-tailwind"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const avatar = data.avatar.childImageSharp.fluid
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
          width: ["auto", null, "90vw", "80vw", null],
          mx: [3, null, "auto", null, null],
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gridTemplateRows: ["180px auto", null, "230px auto", null, null],
        }}
      >
        <Img
          fluid={avatar}
          sx={{
            gridColumn: "2 / 3",
            gridRow: "1 / 2",
            zIndex: 1,
            height: ["250px", null, "300px", null, null],
            width: ["250px", null, "300px", null, null],
            borderRadius: "9999em",
            borderColor: "secondary",
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          alt="Catalyst Helium"
        />
        <div
          sx={{
            gridColumn: "1 / -1",
            gridRow: "2 / 3",
            zIndex: 2,
            bg: "secondary",
            px: [1, 2, 4, null, null],
            pb: 4,
            textAlign: "center",
            borderRadius: "0.25rem",
          }}
        >
          <Styled.p
            sx={{
              fontSize: [4, 5, 6, null, null],
              fontWeight: "bold",
              lineHeight: "snug",
              color: baseColors.gray[8],
            }}
          >
            Hello there! My name is Charlie and I am a web developer, excellent
            human being, and bold writer.
          </Styled.p>
          <Button
            as={Link}
            to="/contact"
            sx={{
              fontSize: 3,
              fontWeight: "bold",
              color: baseColors.gray[8],
              bg: lighten("secondary", 0.15),
              transition: "all 0.3s ease-in-out",
              borderColor: baseColors.gray[8],
              borderStyle: "solid",
              borderWidth: "4px",
              borderRadius: "9999em",
              ":hover": {
                bg: darken("secondary", 0.03),
              },
            }}
          >
            Hire Me
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
