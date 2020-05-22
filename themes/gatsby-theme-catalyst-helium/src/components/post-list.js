/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import { Layout, SEO } from "gatsby-theme-catalyst-core"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FaRegClock } from "react-icons/fa"
import { useCatalystBlogConfig } from "gatsby-theme-catalyst-blog"
import { useHeliumConfig } from "gatsby-theme-catalyst-helium"
import Hero from "./hero"

const PostsList = ({ posts }) => {
  const { postListTitle, displayPostListTitle } = useCatalystBlogConfig()
  const { useHero } = useHeliumConfig()
  return (
    <Layout>
      <SEO title={postListTitle} />
      {useHero && <Hero />}
      <div
        sx={{
          width: "100vw",
          position: "relative",
          left: "calc(-50vw + 50%)",
          display: ["flex", null, "grid", null, null],
          flexDirection: "column",
          gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))",
          variant: "variants.postListContainer",
        }}
      >
        {displayPostListTitle ? <Styled.h1>{postListTitle}</Styled.h1> : null}
        {posts.map((post, index) => {
          const firstPost = index === 0
          const title = post.title || post.slug
          return (
            <article
              sx={{
                mx: [0, null, 3, 4, null],
                my: [4, null, 3, 4, null],
                display: "grid",
                gridTemplateColumns: "32px 1fr 32px",
                gridTemplateRows: [
                  "100px 200px 1fr",
                  "150px 150px 1fr",
                  "200px 100px 1fr",
                  null,
                  null,
                ],
                ":nth-of-type(1)": {
                  gridColumn: "1 / -1",
                  gridTemplateColumns: [
                    "32px 1fr 32px",
                    null,
                    "32px 1fr 1fr 32px",
                    null,
                    null,
                  ],
                  gridTemplateRows: [
                    "100px 200px 1fr",
                    "150px 150px 1fr",
                    "32px auto 1fr",
                    null,
                    null,
                  ],
                  width: ["auto", null, null, "80vw", null],
                  mx: [0, null, 3, "auto", null],
                  ".postImage": {
                    gridColumn: "2 / -1",
                    gridRow: ["1 / 3", null, "2 / -1", null, null],
                    maxHeight: ["auto", null, null, "80vh", "70vh"],
                  },
                  ".postContent": {
                    gridColumn: ["1 / 3", null, "1 / 3", null, null],
                    gridRow: ["2 / -1", null, "1 / 3", null, null],
                  },
                },
                variant: "variants.postListWrapper",
              }}
              key={post.slug}
            >
              <div
                sx={{
                  gridColumn: "1 / 3",
                  gridRow: "1 / 3",
                  zIndex: "1",
                }}
                className="postImage"
              >
                <Link to={post.slug}>
                  <Img
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      height: "100%",
                      width: "100%",
                      variant: "variants.postListImage",
                    }}
                    fluid={post.featuredImage.childImageSharp.fluid}
                    alt={post.title}
                  />
                </Link>
              </div>
              <div
                sx={{
                  gridColumn: "2 / 4",
                  gridRow: "2 / 4",
                  zIndex: "2",
                  bg: "muted",
                  px: 3,
                  py: 4,
                }}
                className="postContent"
              >
                <Styled.h2
                  sx={{
                    mt: 0,
                    mb: 1,
                    fontSize: 4,
                    variant: "variants.postListTitle",
                  }}
                >
                  <Styled.a sx={{ color: "text" }} as={Link} to={post.slug}>
                    {title}
                  </Styled.a>
                </Styled.h2>
                <Styled.p
                  sx={{
                    my: 0,
                    fontSize: 1,
                    color: "textGray",
                    variant: "variants.postListMeta",
                  }}
                >
                  {post.date} &mdash;{" "}
                  <FaRegClock
                    sx={{
                      position: "relative",
                      top: "0.125em",
                    }}
                  />{" "}
                  {post.timeToRead} Min
                </Styled.p>
                <Styled.p
                  sx={{
                    fontStyle: "italic",
                    mt: 1,
                    variant: "variants.postListSubtitle",
                  }}
                >
                  {post.subTitle}
                </Styled.p>
                {firstPost ? (
                  <Styled.p sx={{ variant: "variants.postListExcerpt" }}>
                    {post.excerpt}
                  </Styled.p>
                ) : null}
                <Button
                  sx={{
                    color: "primary",
                    fontWeight: "bold",
                    bg: "transparent",
                    border: "none",
                    px: 0,
                    py: 0,
                    "::after": {
                      content: '"\\00A0 \\2192"',
                    },
                    ":hover": {
                      textDecoration: "underline",
                      bg: "transparent",
                      border: "none",
                    },
                    variant: "variants.postListReadmore",
                  }}
                  as={Link}
                  to={post.slug}
                >
                  Read
                </Button>
              </div>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default PostsList

// /** @jsx jsx */
// import { jsx } from "theme-ui"
// import { Layout, SEO } from "gatsby-theme-catalyst-core"
// import PostListContainer from "./post-list/post-list-container"
// import PostListWrapper from "./post-list/post-list-wrapper"
// import PostListTitle from "./post-list/post-list-title"
// import PostListImage from "./post-list/post-list-image"
// import PostListMeta from "./post-list/post-list-meta"
// import PostListExcerpt from "./post-list/post-list-excerpt"
// import PostListReadmore from "./post-list/post-list-readmore"
// import { FaRegClock } from "react-icons/fa"

// const PostsList = ({ posts }) => {
//   return (
//     <Layout>
//       <PostListContainer>
//         <SEO title="Blog" />
//         {posts.map((post) => {
//           const title = post.title || post.slug
//           return (
//             <PostListWrapper key={post.slug}>
//               <PostListImage
//                 link={post.slug}
//                 image={post.featuredImage.childImageSharp.fluid}
//                 altText={post.title}
//               />
//               <PostListMeta>
//                 <a
//                   href={post.authorLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {post.author}
//                 </a>{" "}
//                 &bull; {post.date} &bull;{" "}
//                 <FaRegClock
//                   sx={{
//                     position: "relative",
//                     top: "0.125em",
//                   }}
//                 />{" "}
//                 {post.timeToRead} Min
//               </PostListMeta>
//               <PostListTitle link={post.slug}>{title}</PostListTitle>
//               <PostListExcerpt>{post.excerpt}</PostListExcerpt>
//               <PostListReadmore link={post.slug}>Read more</PostListReadmore>
//             </PostListWrapper>
//           )
//         })}
//       </PostListContainer>
//     </Layout>
//   )
// }

// export default PostsList
