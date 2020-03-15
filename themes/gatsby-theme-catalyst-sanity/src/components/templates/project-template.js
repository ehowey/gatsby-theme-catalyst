/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import SanityContent from "../sanity/sanity-content"

const ProjectTemplate = ({ data }) => {
  const project = data.sanityPost
  return (
    <Layout>
      <SEO title={project.title} />
      <Styled.h1>{project.title}</Styled.h1>
      <SanityContent data={project._rawBody} />
    </Layout>
  )
}

export default ProjectTemplate
