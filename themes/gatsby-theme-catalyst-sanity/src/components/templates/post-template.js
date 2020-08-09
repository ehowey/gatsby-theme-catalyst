/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
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
        <Styled.p>{post.date}</Styled.p>
        <Styled.p>
          Categories:
          <Styled.ul
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
              display: "flex",
            }}
          >
            {post.categories.map((category) => (
              <Styled.li
                sx={{
                  mr: 2,
                  ":last-of-type": {
                    mr: 0,
                  },
                }}
              >
                <Styled.a as={Link} to={`/categories/${category.slug.current}`}>
                  {category.title}
                </Styled.a>
              </Styled.li>
            ))}
          </Styled.ul>
        </Styled.p>
        <SanityContent data={post._rawBody} />
      </Layout>
    </SanityThemeProvider>
  )
}

export default PostTemplate
