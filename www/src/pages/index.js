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
      <Styled.h2>
        An opinionated set of integrated themes and starters to{" "}
        <i>accelerate</i> your next Gatsby project.
      </Styled.h2>
      <TriangleVertical />
      <Blocks />
      <TriangleVertical />
      <Features />
      <TriangleVertical />
      <div sx={{ display: "grid", placeItems: "center" }}>
        <Button
          as={Link}
          sx={{ bg: baseColors.red[8], color: "white" }}
          to="/docs/getting-started"
        >
          BOOM! Get Started!
        </Button>
      </div>
    </HomeLayout>
  )
}

export default HomePage
