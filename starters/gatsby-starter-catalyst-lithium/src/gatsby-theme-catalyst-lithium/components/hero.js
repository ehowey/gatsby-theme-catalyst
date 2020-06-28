/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import { darken, lighten } from "@theme-ui/color"
import { baseColors } from "@theme-ui/preset-tailwind"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     avatar: file(relativePath: { eq: "avatar.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 500) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `)
  // const avatar = data.avatar.childImageSharp.fluid
  return (
    <div
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mb: 4,
      }}
    >
      <p>Shadowed Hero</p>
    </div>
  )
}

export default Hero
