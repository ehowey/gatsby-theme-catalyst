/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import HomeLayout from "../components/home-layout"
import Features from "../components/features"
import Blocks from "../components/animated-blocks"
import { TriangleVertical } from "../components/spacers"
import { SEO } from "gatsby-theme-catalyst-core"
import Demo from "../components/demo"
import Why from "../components/why"

const HomePage = () => {
  return (
    <HomeLayout>
      <SEO
        title="Home"
        description="Gatsby Theme Catalyst is an opinionated set of integrated themes and starters to accelerate your next Gatsby project. It uses Theme-UI and MDX under the hood to provide a smooth developer experience. Boilerplate starters to fully designed and production ready sites."
      />
      <TriangleVertical />
      <Themed.p sx={{ fontSize: [4, null, 5, null, null], fontWeight: "500" }}>
        An opinionated set of integrated themes and starters to{" "}
        <span
          sx={{
            backgroundImage:
              "radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,193,104,1) 0%, rgba(251,128,128,1) 90% )",
            px: 2,
            mr: 2,
            fontStyle: "italic",
          }}
        >
          accelerate
        </span>
        your next Gatsby project. Build faster.
      </Themed.p>
      <Themed.p
        sx={{
          fontSize: [4, null, 5, null, null],
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        11 themes
        <br />8 starters
      </Themed.p>
      <TriangleVertical />
      <section>
        <Themed.h2
          sx={{
            fontSize: 5,
            mb: 5,
            textAlign: "center",
            "::after": {
              display: "block",
              content: '""',
              width: "40px",
              pt: 2,
              borderBottomStyle: "solid",
              borderBottomWidth: "4px",
              borderBottomColor: "primary",
              mx: "auto",
            },
          }}
        >
          How It Works
        </Themed.h2>
        <Blocks />
      </section>
      <TriangleVertical />
      <section>
        <Themed.h2
          sx={{
            fontSize: 5,
            mb: 5,
            textAlign: "center",
            "::after": {
              display: "block",
              content: '""',
              width: "40px",
              pt: 2,
              borderBottomStyle: "solid",
              borderBottomWidth: "4px",
              borderBottomColor: "primary",
              mx: "auto",
            },
          }}
        >
          Demo
        </Themed.h2>
        <Demo />
      </section>

      <TriangleVertical />
      <section>
        <Themed.h2
          sx={{
            fontSize: 5,
            mb: 5,
            textAlign: "center",
            "::after": {
              display: "block",
              content: '""',
              width: "40px",
              pt: 2,
              borderBottomStyle: "solid",
              borderBottomWidth: "4px",
              borderBottomColor: "primary",
              mx: "auto",
            },
          }}
        >
          Tech Choices
        </Themed.h2>
        <Features />
      </section>
      <TriangleVertical />
      <section>
        <Themed.h2
          sx={{
            fontSize: 5,
            mb: 5,
            textAlign: "center",
            "::after": {
              display: "block",
              content: '""',
              width: "40px",
              pt: 2,
              borderBottomStyle: "solid",
              borderBottomWidth: "4px",
              borderBottomColor: "primary",
              mx: "auto",
            },
          }}
        >
          Why?
        </Themed.h2>
        <Why />
      </section>
    </HomeLayout>
  )
}

export default HomePage
