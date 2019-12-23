/** @jsx jsx */
import { jsx } from "theme-ui"
import { SEO } from "gatsby-theme-catalyst-core"
import PostListContainer from "./post-list/post-list-container"
import PostListWrapper from "./post-list/post-list-wrapper"
import PostListTitle from "./post-list/post-list-title"
import PostListImage from "./post-list/post-list-image"
import PostListMeta from "./post-list/post-list-meta"
import PostListExcerpt from "./post-list/post-list-excerpt"
import PostListReadmore from "./post-list/post-list-readmore"

const PostsList = ({ posts }) => {
  return (
    <PostListContainer>
      <SEO title="Blog" />
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        return (
          <PostListWrapper key={node.slug}>
            <PostListImage
              link={node.slug}
              image={node.featuredImage.childImageSharp.fluid}
              altText={node.title}
            />
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
          </PostListWrapper>
        )
      })}
    </PostListContainer>
  )
}

export default PostsList
