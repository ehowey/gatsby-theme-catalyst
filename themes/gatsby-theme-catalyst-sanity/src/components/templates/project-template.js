/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Seo, Layout } from "gatsby-theme-catalyst-core"
import { SanityContent } from "gatsby-theme-catalyst-sanity"

const ProjectTemplate = ({ data }) => {
  const project = data.sanityProject
  return (
    <Layout>
      <Seo title={project.title} />
      <Themed.h1>{project.title}</Themed.h1>
      <SanityContent data={project._rawBody} />
    </Layout>
  )
}

export default ProjectTemplate
