/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import {
  SanityContent,
  SanityThemeProvider,
} from "gatsby-theme-catalyst-sanity"

const ProjectsTemplate = ({ data }) => {
  const projects = data.allSanityProject.nodes
  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title="Projects" />
        {projects.map((project) => (
          <div key={project.id}>
            <Styled.h1>{project.title}</Styled.h1>
            <SanityContent data={project._rawBody} />
          </div>
        ))}
      </Layout>
    </SanityThemeProvider>
  )
}

export default ProjectsTemplate
