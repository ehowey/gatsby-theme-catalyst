/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { useSanityConfig } from "gatsby-theme-catalyst-sanity"

const ProjectsTemplate = ({ data }) => {
  const projects = data.allSanityProject.nodes
  const {
    sanityProjectPath,
    sanityProjectListTitle,
    sanityDisplayProjectListTitle,
  } = useSanityConfig()
  const rootPath = sanityProjectPath.replace(/\/*$/, `/`) //Ensure trailing slash
  return (
    <Layout>
      <SEO title={sanityProjectListTitle} />
      {sanityDisplayProjectListTitle && (
        <Themed.h1>{sanityProjectListTitle}</Themed.h1>
      )}
      {projects.map((project) => (
        <article sx={{ my: 5 }} key={project.id}>
          <Themed.a
            as={Link}
            to={rootPath.concat(project.slug.current.replace(/\/*$/, `/`))}
          >
            <Themed.h2>{project.title}</Themed.h2>
          </Themed.a>
          <Themed.p>{project.excerpt}</Themed.p>
        </article>
      ))}
    </Layout>
  )
}

export default ProjectsTemplate
