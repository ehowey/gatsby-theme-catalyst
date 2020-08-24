/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { lighten } from "@theme-ui/color"
import { Link } from "gatsby"

const PostFooter = ({ previous, next }) => (
  <div sx={{ mb: 3 }}>
    <Styled.hr sx={{ bg: lighten("textGray", 0.4) }} />
    {(previous || next) && (
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "row", null, null, null],
          justifyContent: ["flex-start", "space-between", null, null, null],
          width: "100%",
        }}
      >
        <div
          sx={{
            width: ["60%", "40%", null, null, null],
            mb: [3, 0, null, null, null],
          }}
        >
          {" "}
          {previous && (
            <div>
              <Styled.h5>&larr; Previous Post</Styled.h5>
              <Styled.a as={Link} to={previous.slug} rel="prev">
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
              <Styled.a as={Link} to={next.slug} rel="next">
                {next.title}
              </Styled.a>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
)

export default PostFooter
