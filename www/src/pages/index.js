/** @jsx jsx */
import { jsx } from "theme-ui"
import { Seo } from "gatsby-theme-catalyst-core"
import HomeLayout from "../components/home/home-layout"
import Features from "../components/home/home-features"
import AnimatedBlocks from "../components/animated-blocks"
import TriangleVertical from "../components/triangle-spacer"
import Demo from "../components/home/home-demo"
import Why from "../components/home/home-why"
import Intro from "../components/home/home-intro"
import Heading from "../components/home/home-heading"

const HomePage = () => {
  return (
    <HomeLayout>
      <Seo
        title="Home"
        description="Gatsby Theme Catalyst is an opinionated set of integrated themes and starters to accelerate your next Gatsby project. It uses Theme-UI and MDX under the hood to provide a smooth developer experience. Boilerplate starters to fully designed and production ready sites."
      />
      <TriangleVertical />
      <Intro />
      <TriangleVertical />
      <section>
        <Heading> How It Works</Heading>
        <AnimatedBlocks />
      </section>
      <TriangleVertical />
      <section>
        <Heading>Demo</Heading>
        <Demo />
      </section>
      <TriangleVertical />
      <section>
        <Heading>Tech Choices</Heading>
        <Features />
      </section>
      <TriangleVertical />
      <section>
        <Heading>Why?</Heading>
        <Why />
      </section>
    </HomeLayout>
  )
}

export default HomePage
