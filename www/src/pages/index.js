/** @jsx jsx */
import { jsx } from "theme-ui"
import { Seo } from "gatsby-theme-catalyst-core"
import HomeLayout from "../components/home/home-layout"
import HomeShutdown from "../components/home/home-shutdown"
import TriangleVertical from "../components/triangle-spacer"

const HomePage = () => {
  return (
    <HomeLayout>
      <Seo
        title="Home"
        description="Gatsby Theme Catalyst is an opinionated set of integrated themes and starters to accelerate your next Gatsby project. It uses Theme-UI and MDX under the hood to provide a smooth developer experience. Boilerplate starters to fully designed and production ready sites."
      />
      <HomeShutdown />
    </HomeLayout>
  )
}

export default HomePage
