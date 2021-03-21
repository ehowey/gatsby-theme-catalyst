/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { Layout, SEO } from "gatsby-theme-catalyst-core"
import { useCatalystBlogConfig } from "gatsby-theme-catalyst-blog"

const PostsList = ({ posts }) => {
  const { postListTitle, displayPostListTitle } = useCatalystBlogConfig()
  return (
    <Layout>
      <SEO title={postListTitle} />
      {displayPostListTitle ? <Themed.h1>{postListTitle}</Themed.h1> : null}
      {posts.map((post) => {
        const title = post.title || post.slug
        return (
          <div key={post.slug}>
            <Themed.a as={Link} to={post.slug}>
              <Themed.h2>{title}</Themed.h2>
            </Themed.a>
            <Themed.p>{post.date}</Themed.p>
            <Themed.p>{post.excerpt}</Themed.p>
          </div>
        )
      })}
    </Layout>
  )
}

export default PostsList
