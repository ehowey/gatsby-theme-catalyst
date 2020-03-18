/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import SanityContent from "../sanity/sanity-content"

const ProjectsTemplate = ({ data }) => {
  const projects = data.allSanityProject.nodes
  return (
    <Layout>
      <SEO title="Projects" />
      {projects.map(project => (
        <article>
          <Styled.h1>{project.title}</Styled.h1>
          <SanityContent data={project._rawBody} />
        </article>
      ))}
    </Layout>
  )
}

export default ProjectsTemplate
