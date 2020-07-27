/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import {
  useSanityConfig,
  SanityThemeProvider,
} from "gatsby-theme-catalyst-sanity"

const ProjectsTemplate = ({ data }) => {
  const projects = data.allSanityProject.nodes
  const { sanityProjectPath } = useSanityConfig()
  const rootPath = sanityProjectPath.replace(/\/*$/, `/`) //Ensure trailing slash
  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title="Projects" />
        {projects.map((project) => (
          <article sx={{ my: 5 }} key={project.id}>
            <Styled.a
              as={Link}
              to={rootPath.concat(project.slug.current.replace(/\/*$/, `/`))}
            >
              <Styled.h2>{project.title}</Styled.h2>
            </Styled.a>
            <Styled.p>{project.excerpt}</Styled.p>
          </article>
        ))}
      </Layout>
    </SanityThemeProvider>
  )
}

export default ProjectsTemplate
