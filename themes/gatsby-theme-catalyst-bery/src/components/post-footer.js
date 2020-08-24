/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { lighten } from "@theme-ui/color"
import { Link } from "gatsby"
import { useSanityConfig } from "gatsby-theme-catalyst-sanity"

const PostFooter = ({ previous, next }) => {
  const { sanityPostPath } = useSanityConfig()
  const rootPath = sanityPostPath.replace(/\/*$/, `/`) //Ensure trailing slash
  return (
    <div sx={{ mb: 3 }}>
      <Styled.hr sx={{ bg: lighten("textGray", 0.4) }} />
      {(previous || next) && (
        <div
          sx={{
            display: "flex",
            flexDirection: ["column", "row", null, null, null],
            justifyContent: ["flex-start", "space-between", null, null, null],
          }}
        >
          <div
            sx={{
              width: ["60%", "40%", null, null, null],
              mb: [3, 0, null, null, null],
            }}
          >
            {previous && (
              <div>
                <Styled.h5>&larr; Previous Post</Styled.h5>
                <Styled.a
                  as={Link}
                  to={rootPath.concat(
                    previous.slug.current.replace(/\/*$/, `/`)
                  )}
                  rel="prev"
                >
                  {previous.title}
                </Styled.a>
              </div>
            )}
          </div>
          <div
            sx={{
              alignSelf: ["flex-end", "flex-start", null, null, null],
              width: ["60%", "40%", null, null, null],
            }}
          >
            {next && (
              <div
                sx={{
                  textAlign: "right",
                }}
              >
                <Styled.h5>Next Post &rarr;</Styled.h5>
                <Styled.a
                  as={Link}
                  to={rootPath.concat(next.slug.current.replace(/\/*$/, `/`))}
                  rel="next"
                >
                  {next.title}
                </Styled.a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default PostFooter
