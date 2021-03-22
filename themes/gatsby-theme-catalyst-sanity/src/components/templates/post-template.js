/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { SanityContent, useSanityConfig } from "gatsby-theme-catalyst-sanity"

const PostTemplate = ({ data, previous, next }) => {
  const post = data.sanityPost
  const { sanityPostPath } = useSanityConfig()
  const rootPath = sanityPostPath.replace(/\/*$/, `/`) //Ensure trailing slash
  return (
    <Layout>
      <SEO title={post.title} />
      <Themed.h1>{post.title}</Themed.h1>
      <Themed.p>{post.date}</Themed.p>
      <SanityContent data={post._rawBody} />
      {previous && (
        <Themed.a
          as={Link}
          to={rootPath.concat(previous.slug.current.replace(/\/*$/, `/`))}
          rel="prev"
        >
          ← {previous.title}
        </Themed.a>
      )}
      {next && (
        <Themed.a
          as={Link}
          to={rootPath.concat(next.slug.current.replace(/\/*$/, `/`))}
          rel="next"
        >
          {next.title} →
        </Themed.a>
      )}
    </Layout>
  )
}

export default PostTemplate
