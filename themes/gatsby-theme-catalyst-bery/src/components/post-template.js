/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { alpha } from "@theme-ui/color"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import BackgroundImg from "gatsby-background-image"
import {
  SanityContent,
  SanityThemeProvider,
} from "gatsby-theme-catalyst-sanity"
import { FaRegClock } from "react-icons/fa"

const PostTemplate = ({ data }) => {
  const post = data.sanityPost
  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title={post.title} />
        <BackgroundImg
          fluid={post.featuredImage.asset.fluid}
          sx={{ display: "grid", placeItems: "center", minHeight: "250px" }}
        >
          <Styled.h1 sx={{ m: 0, p: 4, textAlign: "center" }}>
            <div sx={{ bg: alpha("primary", 0.8), borderRadius: "4px", px: 3 }}>
              {post.title}
            </div>
          </Styled.h1>
        </BackgroundImg>
        <Styled.p sx={{ color: "textGray", fontSize: 1 }}>
          {post.date} &bull;{" "}
          <FaRegClock
            sx={{
              position: "relative",
              top: "0.125em",
            }}
          />{" "}
          {post.readingTimeInMinutes} Min
        </Styled.p>
        <SanityContent data={post._rawBody} />
      </Layout>
    </SanityThemeProvider>
  )
}

export default PostTemplate
