/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Button } from "theme-ui"
import { MdChangeHistory } from "react-icons/md"
import Img from "gatsby-image"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"

const Hero = () => {
  const { logo } = useSiteMetadata()
  return (
    <section
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mt: -3,
        py: 4,
        px: 3,
        mb: 4,
        backgroundImage:
          "radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,193,104,1) 0%, rgba(251,128,128,1) 90% )",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Img sx={{ width: "180px" }} fluid={logo} />
      <Styled.h1
        sx={{
          textTransform: "uppercase",
          fontSize: [6, 8, null, null, null],
        }}
      >
        Gatsby Theme Catalyst
      </Styled.h1>
      <Styled.p
        sx={{
          mt: -3,
          mb: 4,
          fontSize: [3, 4, null, null, null],
        }}
      >
        Gatsby &nbsp;&&&nbsp; Theme-UI &nbsp;&&&nbsp; (&nbsp;MDX ||
        SANITY.io&nbsp;)
      </Styled.p>
      <Styled.inlineCode sx={{ mb: 4 }}>
        gatsby new catalyst https://github.com/ehowey/gatsby-starter-catalyst
      </Styled.inlineCode>
      <div
        sx={{
          display: "flex",
          maxWidth: "maxContentWidth",
        }}
      >
        <Button
          as={Link}
          to="/getting-started"
          sx={{ bg: "accent", color: "black", mr: 3 }}
        >
          Getting Started
        </Button>
        <Button
          as={Link}
          to="/docs"
          sx={{ bg: "accent", color: "black", mr: 3 }}
        >
          Docs
        </Button>
        <Button
          as="a"
          href="https://github.com/ehowey/gatsby-theme-catalyst"
          sx={{ bg: "accent", color: "black" }}
        >
          GitHub
        </Button>
      </div>
    </section>
  )
}

export default Hero
