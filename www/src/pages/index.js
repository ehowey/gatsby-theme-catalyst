/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import HomeLayout from "../components/home-layout"
import Hero from "../components/hero"
import Features from "../components/features"
import { TriangleVertical } from "../components/spacers"

const HomePage = () => {
  return (
    <HomeLayout>
      <TriangleVertical />
      <Styled.h2>
        An opinionated set of integrated themes and starters to{" "}
        <i>accelerate</i> your next Gatsby project.
      </Styled.h2>
      <TriangleVertical />
      <Features />
    </HomeLayout>
  )
}

export default HomePage
