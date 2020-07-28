/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import {
  useSanityConfig,
  SanityThemeProvider,
} from "gatsby-theme-catalyst-sanity"

const PostsTemplate = ({ data }) => {
  const posts = data.allSanityPost.nodes
  const {
    sanityPostPath,
    sanityPostListTitle,
    sanityDisplayPostListTitle,
  } = useSanityConfig()
  const rootPath = sanityPostPath.replace(/\/*$/, `/`) //Ensure trailing slash

  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title={sanityPostListTitle} />
        {sanityDisplayPostListTitle && (
          <Styled.h1>{sanityPostListTitle}</Styled.h1>
        )}
        {posts.map((post) => (
          <article sx={{ mb: 5 }} key={post.id}>
            <Styled.a
              as={Link}
              to={rootPath.concat(post.slug.current.replace(/\/*$/, `/`))}
            >
              <Styled.h2>{post.title}</Styled.h2>
            </Styled.a>
            <Styled.p>{post.date}</Styled.p>
            <Styled.p>{post.excerpt}</Styled.p>
          </article>
        ))}
      </Layout>
    </SanityThemeProvider>
  )
}

export default PostsTemplate
