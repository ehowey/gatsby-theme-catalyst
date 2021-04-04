/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { lighten } from "@theme-ui/color"
import { Link } from "gatsby"

const PostFooter = ({ previous, next }) => (
  <div sx={{ mb: 3 }}>
    <Themed.hr sx={{ bg: lighten("textGray", 0.4) }} />
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
              <Themed.h5>&larr; Previous Post</Themed.h5>
              <Themed.a as={Link} to={previous.slug} rel="prev">
                {previous.title}
              </Themed.a>
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
              <Themed.h5>Next Post &rarr;</Themed.h5>
              <Themed.a as={Link} to={next.slug} rel="next">
                {next.title}
              </Themed.a>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
)

export default PostFooter
