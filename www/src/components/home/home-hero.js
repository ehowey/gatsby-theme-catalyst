/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Button } from "theme-ui"
import { baseColors } from "@theme-ui/preset-tailwind"
import { darken } from "@theme-ui/color"
// import { AiOutlineFire } from "react-icons/ai"
import { FiBookOpen, FiGithub } from "react-icons/fi"
import GitHubButton from "react-github-btn"
import catalystLogo from "../../../content/assets/catalyst-svg-logo.svg"

const HomeHero = () => {
  return (
    <header
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        py: 4,
        px: 3,
        mb: 4,
        backgroundImage:
          "radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,193,104,1) 0%, rgba(251,128,128,1) 90% )",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        sx={{
          position: "absolute",
          top: "25px",
          right: "10px",
          display: ["none", "block", null, null, null],
        }}
      >
        <GitHubButton
          href="https://github.com/ehowey/gatsby-theme-catalyst"
          data-icon="octicon-star"
          data-show-count="true"
          aria-label="Star Gatsby Theme Catalyst on GitHub"
          data-size="large"
        >
          Star
        </GitHubButton>
      </div>
      <div sx={{ display: "grid", placeItems: "center" }}>
        <img
          src={catalystLogo}
          alt="Gatsby Theme Catalyst Logo"
          sx={{ width: "100px" }}
        />
        <h1
          sx={{
            fontFamily: "heading",
            fontWeight: "heading",
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: 4,
            color: baseColors.gray[8],
            mb: 3,
          }}
        >
          Gatsby Theme Catalyst
        </h1>

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
                gridColumn: ["1 / 2", "2 / 3", null, null, null],
                gridRow: ["2 / 3", "1 / 2", null, null, null],
              }}
            >
              <Button
                as={Link}
                to="/docs/"
                sx={{
                  fontSize: 2,
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
                  fontSize: 2,
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
      </div>
    </header>
  )
}

export default HomeHero
