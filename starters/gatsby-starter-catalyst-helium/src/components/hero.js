/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui"
import { darken, lighten } from "@theme-ui/color"
import { baseColors } from "@theme-ui/preset-tailwind"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

// This is a component that is using component shadowing to shadow an empty Hero component from the base theme. Try playing around with this and modifying it to be a hero you like more!

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `)
  const avatar = data.avatar.childImageSharp.gatsbyImageData
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
          width: ["auto", null, "90vw", "80vw", "1280px"],
          mx: [0, 3, "auto", null, null],
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gridTemplateRows: ["180px auto", null, "230px auto", null, null],
        }}
      >
        <GatsbyImage
          image={avatar}
          sx={{
            gridColumn: "2 / 3",
            gridRow: "1 / 2",
            zIndex: 1,
            height: ["250px", null, "300px", null, null],
            width: ["250px", null, "300px", null, null],
            borderRadius: "50%",
            borderColor: "primary",
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          imgStyle={{ borderRadius: "50%" }}
          alt="Catalyst Helium"
        />
        <div
          sx={{
            gridColumn: "1 / -1",
            gridRow: "2 / 3",
            zIndex: 2,
            bg: "primary",
            px: [2, 3, 4, null, null],
            pb: 4,
            textAlign: "center",
            borderRadius: ["0", "0.25rem", null, null, null],
          }}
        >
          <Themed.p
            sx={{
              fontSize: [4, 5, 6, null, null],
              lineHeight: "snug",
              my: 4,
              color: baseColors.gray[8],
            }}
          >
            Hello there! My name is <b>Charlie Rose</b> and I am an excellent
            human being and <b>bold</b> writer.
          </Themed.p>
          <Button
            as={Link}
            to="/contact"
            sx={{
              fontSize: [2, 3, null, null, null],
              fontWeight: "bold",
              color: baseColors.gray[8],
              bg: lighten("primary", 0.15),
              transition: "all 0.3s ease-in-out",
              borderColor: baseColors.gray[8],
              borderStyle: "solid",
              borderWidth: "4px",
              borderRadius: "9999em",
              ":hover": {
                bg: darken("primary", 0.08),
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
