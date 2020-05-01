/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Layout, SEO } from "gatsby-theme-catalyst-core"
import { useCatalystBlogConfig } from "../utils/use-catalyst-blog-config"

const PostsList = ({ posts }) => {
  const { postListTitle } = useCatalystBlogConfig()
  return (
    <Layout>
      <div>
        <SEO title={postListTitle} />
        <Styled.h1>{postListTitle}</Styled.h1>
        {posts.map((post) => {
          const title = post.title || post.slug
          return (
            <div key={post.slug}>
              <Styled.a as={Link} to={post.slug}>
                <Styled.h2>{title}</Styled.h2>
              </Styled.a>
              <Styled.p>{post.date}</Styled.p>
              <Styled.p>{post.excerpt}</Styled.p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default PostsList
