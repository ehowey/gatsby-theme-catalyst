/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { SEO } from "gatsby-theme-catalyst-core"

const PostsList = ({ posts }) => {
  return (
    <Fragment>
      <SEO title="Blog" />
      <div sx={{ my: 5 }}>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Fragment key={node.slug}>
              <Img
                sx={{
                  height: "250px",
                  mb: 3,
                }}
                fluid={node.featuredImage.childImageSharp.fluid}
              />
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
            </Fragment>
          )
        })}
      </div>
    </Fragment>
  )
}

export default PostsList
