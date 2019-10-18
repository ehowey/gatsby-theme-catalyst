/** @jsx jsx */
import { Fragment } from "react"
import { Link } from "gatsby"
import { jsx, Styled } from "theme-ui"
import { Layout, SEO } from "gatsby-theme-catalyst-core"

const Posts = ({ posts }) => (
  <Layout>
    <SEO title="Blog" />
    {posts.map(({ node }) => {
      const title = node.title || node.slug
      return (
        <Fragment key={node.slug}>
          <div sx={{ mb: 5 }}>
            <Styled.h2>
              <Styled.a
                as={Link}
                to={node.slug}
                sx={{
                  color: "text",
                }}
              >
                {title}
              </Styled.a>
            </Styled.h2>
            <Styled.p sx={{ m: 0, p: 0, fontSize: 2 }}>{node.date}</Styled.p>
            <Styled.p>{node.excerpt}</Styled.p>
          </div>
        </Fragment>
      )
    })}
  </Layout>
)

export default Posts
