/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Button } from "theme-ui"
import { baseColors } from "@theme-ui/preset-tailwind"
import { darken } from "@theme-ui/color"
import catalystLogo from "../../content/assets/catalyst-svg-logo.svg"
import { AiOutlineFire } from "react-icons/ai"
import { FiBookOpen, FiGithub } from "react-icons/fi"

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
        sx={{
          mb: 4,
          bg: baseColors.gray[8],
          color: baseColors.gray[1],
          wordWrap: "break-word",
          textOverflow: "wrap",
          overflowWrap: "break-word",
          wordBreak: "break-word",
        }}
      >
        gatsby new catalyst https://github.com/ehowey/gatsby-starter-catalyst
      </Styled.inlineCode>
      <nav sx={{ width: ["100%", "auto", null, null, null] }}>
        <ul
          sx={{
            display: "grid",
            gridTemplateColumns: [
              "minmax(0, 1fr) minmax(0, 1fr)",
              "auto auto auto",
              null,
              null,
              null,
            ],
            gridTemplateRows: ["auto auto", "auto", null, null, null],
            gridGap: 3,
            maxWidth: "maxContentWidth",
            m: 0,
            p: 0,
            listStyle: "none",
          }}
        >
          <li
            sx={{
              gridColumn: ["1 / -1", "1 / 2", null, null, null],
              grideRow: "1 / 2",
            }}
          >
            <Button
              as={Link}
              to="/docs/getting-started/"
              sx={{
                bg: "#e91c21",
                color: "white",
                boxShadow: "default",
                display: "flex",
                alignItems: "center",
                transition: "all 0.3s ease",
                justifyContent: ["center", "start", null, null, null],
                ":hover, :active, :focus": {
                  bg: darken("#e91c21", 0.03),
                  boxShadow: "lg",
                },
              }}
            >
              <AiOutlineFire sx={{ mr: 1 }} /> Get Started
            </Button>
          </li>
          <li
            sx={{
              gridColumn: ["1 / 2", "2 / 3", null, null, null],
              gridRow: ["2 / 3", "1 / 2", null, null, null],
            }}
          >
            <Button
              as={Link}
              to="/docs/"
              sx={{
                bg: "#ffd7d7",
                color: "black",
                boxShadow: "default",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: ["center", "start", null, null, null],
                ":hover, :active, :focus": {
                  bg: darken("#ffd7d7", 0.03),
                  boxShadow: "lg",
                },
              }}
            >
              <FiBookOpen sx={{ mr: 1 }} /> Docs
            </Button>
          </li>
          <li
            sx={{
              gridColumn: ["2 / 3", "3 / 4", null, null, null],
              gridRow: ["2 / 3", "1 / 2", null, null, null],
            }}
          >
            <Button
              as="a"
              href="https://github.com/ehowey/gatsby-theme-catalyst"
              sx={{
                bg: "#ffd7d7",
                color: "black",
                boxShadow: "default",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: ["center", "start", null, null, null],
                ":hover, :active, :focus": {
                  bg: darken("#ffd7d7", 0.03),
                  boxShadow: "lg",
                },
              }}
            >
              <FiGithub sx={{ mr: 1 }} />
              GitHub
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Hero
