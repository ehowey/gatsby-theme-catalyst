/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import HomeLayout from "../components/home-layout"
import Features from "../components/features"
import Blocks from "../components/animated-blocks"
import { TriangleVertical } from "../components/spacers"
import { Link } from "gatsby"
import { baseColors } from "@theme-ui/preset-tailwind"

const HomePage = () => {
  return (
    <HomeLayout>
      <TriangleVertical />
      <Styled.p sx={{ fontSize: [3, 4, 5, null, null], fontWeight: "bold" }}>
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
        your next Gatsby project.
      </Styled.p>
      <TriangleVertical />
      <Blocks />
      <TriangleVertical />
      <Features />
      <TriangleVertical />
      <div sx={{ display: "grid", placeItems: "center" }}>
        <Button
          as={Link}
          sx={{
            backgroundImage:
              "radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,193,104,1) 0%, rgba(251,128,128,1) 90% )",
            color: baseColors.gray[8],
            fontWeight: "bold",
          }}
          to="/docs/getting-started"
        >
          BOOM! Get Started!
        </Button>
      </div>
    </HomeLayout>
  )
}

export default HomePage
