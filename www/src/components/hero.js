/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Button } from "theme-ui"
import { baseColors } from "@theme-ui/preset-tailwind"
import { darken } from "@theme-ui/color"
import catalystLogo from "../../content/assets/catalyst-svg-logo.svg"

const Hero = () => {
  return (
    <header
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
      <img
        src={catalystLogo}
        alt="Gatsby Theme Catalyst Logo"
        sx={{ width: "180px" }}
      />
      <Styled.h1
        sx={{
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: [5, 6, 7, 8, null],
          color: baseColors.gray[8],
          mb: 3,
          "::after": {
            content: "none",
          },
        }}
      >
        Gatsby Theme Catalyst
      </Styled.h1>
      <Styled.inlineCode
        sx={{ mb: 4, bg: baseColors.gray[8], color: baseColors.gray[1] }}
      >
        gatsby new catalyst https://github.com/ehowey/gatsby-starter-catalyst
      </Styled.inlineCode>
      <nav>
        <ul
          sx={{
            display: "flex",
            maxWidth: "maxContentWidth",
            m: 0,
            p: 0,
            listStyle: "none",
          }}
        >
          <li>
            <Button
              as={Link}
              to="/docs/getting-started/"
              sx={{
                bg: "#e91c21",
                color: "white",
                boxShadow: "default",
                mr: 3,
                transition: "all 0.3s ease",
                ":hover, :active, :focus": {
                  bg: darken("#e91c21", 0.03),
                  boxShadow: "lg",
                },
              }}
            >
              Get Started
            </Button>
          </li>
          <li>
            <Button
              as={Link}
              to="/docs/"
              sx={{
                bg: "#ffd7d7",
                color: "black",
                mr: 3,
                boxShadow: "default",
                transition: "all 0.3s ease",
                ":hover, :active, :focus": {
                  bg: darken("#ffd7d7", 0.03),
                  boxShadow: "lg",
                },
              }}
            >
              Docs
            </Button>
          </li>
          <li>
            <Button
              as="a"
              href="https://github.com/ehowey/gatsby-theme-catalyst"
              sx={{
                bg: "#ffd7d7",
                color: "black",
                boxShadow: "default",
                transition: "all 0.3s ease",
                ":hover, :active, :focus": {
                  bg: darken("#ffd7d7", 0.03),
                  boxShadow: "lg",
                },
              }}
            >
              GitHub
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Hero
