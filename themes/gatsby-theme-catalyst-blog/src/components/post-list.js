/** @jsx jsx */
import { jsx } from "theme-ui"
import { SEO } from "gatsby-theme-catalyst-core"
import PostListTitle from "./post-list/post-list-title"
import PostListImage from "./post-list/post-list-image"
import PostListMeta from "./post-list/post-list-meta"
import PostListExcerpt from "./post-list/post-list-excerpt"
import PostListReadmore from "./post-list/post-list-readmore"

const PostsList = ({ posts }) => {
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
            <PostListMeta>
              <a
                href={node.authorLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {node.author}
              </a>{" "}
              &bull; {node.date}
            </PostListMeta>
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
