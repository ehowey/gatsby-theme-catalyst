/** @jsx jsx */
import { jsx } from "theme-ui"
import { SEO, useSiteMetadata } from "gatsby-theme-catalyst-core"
import PostListTitle from "./post-list/posts-list-title"
import PostListImage from "./post-list/posts-list-image"
import PostListMeta from "./post-list/posts-list-meta"
import PostListExcerpt from "./post-list/posts-list-excerpt"
import PostListReadmore from "./post-list/post-list-readmore"

const PostsList = ({ posts }) => {
  const { author } = useSiteMetadata()
  return (
    <div>
      <SEO title="Blog" />
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        return (
          <div
            sx={{
              mb: 5,
              ":last-of-type": {
                mb: 0,
              },
            }}
            key={node.slug}
          >
            <PostListImage image={node.featuredImage.childImageSharp.fluid} />
            <PostListMeta date={node.date} author={author} />
            <PostListTitle link={node.slug}>{title}</PostListTitle>
            <PostListExcerpt>{node.excerpt}</PostListExcerpt>
            <PostListReadmore link={node.slug}>Read more</PostListReadmore>
          </div>
        )
      })}
    </div>
  )
}

export default PostsList
