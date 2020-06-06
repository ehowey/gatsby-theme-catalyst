/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"

const TagPage = ({ posts, tag }) => {
  return (
    <Layout>
      <SEO title={tag} />
      <Styled.h1>{tag}</Styled.h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <Styled.p>
            <Styled.a as={Link} to={post.slug} sx={{ fontSize: 3 }}>
              {post.title}
            </Styled.a>
            <br />
            {post.excerpt}
          </Styled.p>
        </div>
      ))}
    </Layout>
  )
}

export default TagPage
