/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
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
        <div sx={{ display: "flex", justifyContent: "space-between" }}>
          <div sx={{ width: "40%" }}>
            {previous && (
              <div>
                <Styled.h4>&larr; Previous Post</Styled.h4>
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
          <div sx={{ width: "40%" }}>
            {next && (
              <div sx={{ textAlign: "right" }}>
                <Styled.h4>Next Post &rarr;</Styled.h4>
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
