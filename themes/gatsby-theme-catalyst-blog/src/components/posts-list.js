/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"

import { SEO, useSiteMetadata } from "gatsby-theme-catalyst-core"
import PostListTitle from "./posts-list-title"
import PostListImage from "./posts-list-image"
import PostListMeta from "./posts-list-meta"

const PostsList = ({ posts }) => {
  const { author } = useSiteMetadata()
  return (
    <Fragment>
      <SEO title="Blog" />
      <div sx={{ my: 5 }}>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Fragment key={node.slug}>
              <PostListImage image={node.featuredImage.childImageSharp.fluid} />
              <PostListMeta date={node.date} author={author} />
              <PostListTitle link={node.slug}>{title}</PostListTitle>
              <Styled.p>{node.excerpt}</Styled.p>
            </Fragment>
          )
        })}
      </div>
    </Fragment>
  )
}

export default PostsList
