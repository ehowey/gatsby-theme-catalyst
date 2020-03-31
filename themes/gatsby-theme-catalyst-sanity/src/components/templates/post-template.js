/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import {
  SanityContent,
  SanityThemeProvider,
} from "gatsby-theme-catalyst-sanity"

const PostTemplate = ({ data }) => {
  const post = data.sanityPost
  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title={post.title} />
        <Styled.h1>{post.title}</Styled.h1>
        <SanityContent data={post._rawBody} />
      </Layout>
    </SanityThemeProvider>
  )
}

export default PostTemplate
