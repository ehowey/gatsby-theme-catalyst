/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = ({ data: { post }, previous, next }) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.excerpt}
      image={post.seoImage.childImageSharp.seo}
      keywords={post.keywords}
    />
    <Styled.h1>{post.title}</Styled.h1>
    <Styled.p>{post.date}</Styled.p>
    <MDXRenderer>{post.body}</MDXRenderer>
    {previous && (
      <Styled.a as={Link} to={previous.slug} rel="prev">
        ← {previous.title}
      </Styled.a>
    )}
    {next && (
      <Styled.a as={Link} to={next.slug} rel="next">
        {next.title} →
      </Styled.a>
    )}
  </Layout>
)

export default Post
