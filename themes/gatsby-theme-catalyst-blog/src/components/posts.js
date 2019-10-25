/** @jsx jsx */
import { Fragment } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { jsx, Styled } from "theme-ui"
import { Layout, SEO } from "gatsby-theme-catalyst-core"
import merge from "deepmerge"

const Posts = ({ posts }) => {
  const data = useStaticQuery(graphql`
    query {
      allBlogPost {
        edges {
          node {
            ... on MdxBlogPost {
              id
              fields {
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <div sx={{ my: 5 }}>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Fragment key={node.slug}>
              {data.allBlogPost.edges
                .filter(imageQuery => imageQuery.node.id === node.id)
                .map(imageQuery => (
                  <Img
                    sx={{
                      height: "250px",
                      mb: 3,
                    }}
                    fluid={
                      imageQuery.node.fields.featuredImage.childImageSharp.fluid
                    }
                  />
                ))}
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
    </Layout>
  )
}

export default Posts
