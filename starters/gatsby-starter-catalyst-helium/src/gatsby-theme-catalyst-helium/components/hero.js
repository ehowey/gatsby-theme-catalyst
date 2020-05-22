/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
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
    <div>
      <div
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr" }}
      >
        <Img fluid={avatar} sx={{ gridColumn: "1 / 3" }} />
        <Styled.p as="h1" sx={{ gridColumn: "3 / -1" }}>
          Hello there! My name is Charlie and I am a web developer, excellent
          human being, and boring copy text.
          <Styled.a as={Link} to="/contact">
            Hire me
          </Styled.a>
        </Styled.p>
      </div>
    </div>
  )
}

export default Hero
