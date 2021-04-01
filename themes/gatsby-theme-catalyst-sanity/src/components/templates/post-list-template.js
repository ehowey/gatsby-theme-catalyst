/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { Seo, Layout } from "gatsby-theme-catalyst-core"
import { useSanityConfig } from "gatsby-theme-catalyst-sanity"

const PostsTemplate = ({ data }) => {
  const posts = data.allSanityPost.nodes
  const {
    sanityPostPath,
    sanityPostListTitle,
    sanityDisplayPostListTitle,
  } = useSanityConfig()
  const rootPath = sanityPostPath.replace(/\/*$/, `/`) //Ensure trailing slash

  return (
    <Layout>
      <Seo title={sanityPostListTitle} />
      {sanityDisplayPostListTitle && (
        <Themed.h1>{sanityPostListTitle}</Themed.h1>
      )}
      {posts.map((post) => (
        <article sx={{ mb: 5 }} key={post.id}>
          <Themed.a
            as={Link}
            to={rootPath.concat(post.slug.current.replace(/\/*$/, `/`))}
          >
            <Themed.h2>{post.title}</Themed.h2>
          </Themed.a>
          <Themed.p>{post.date}</Themed.p>
          <Themed.p>{post.excerpt}</Themed.p>
        </article>
      ))}
    </Layout>
  )
}

export default PostsTemplate
