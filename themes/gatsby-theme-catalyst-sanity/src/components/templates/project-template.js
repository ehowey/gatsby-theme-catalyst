/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import {
  SanityContent,
  SanityThemeProvider,
} from "gatsby-theme-catalyst-sanity"

const ProjectTemplate = ({ data }) => {
  const project = data.sanityProject
  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title={project.title} />
        <Themed.h1>{project.title}</Themed.h1>
        <SanityContent data={project._rawBody} />
      </Layout>
    </SanityThemeProvider>
  )
}

export default ProjectTemplate
