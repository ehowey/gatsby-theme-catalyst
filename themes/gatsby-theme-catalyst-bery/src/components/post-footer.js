/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import { Link } from "gatsby"
import { useSanityConfig } from "gatsby-theme-catalyst-sanity"

const PostFooter = ({ previous, next }) => {
  const { sanityPostPath } = useSanityConfig()
  const rootPath = sanityPostPath.replace(/\/*$/, `/`) //Ensure trailing slash
  return (
    <div>
      <Styled.hr sx={{ bg: "textGray" }} />
      {(previous || next) && (
        <Flex
          sx={{
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            padding: 0,
          }}
          as="ul"
        >
          <li>
            {previous && (
              <Styled.a
                as={Link}
                to={rootPath.concat(previous.slug.current.replace(/\/*$/, `/`))}
                rel="prev"
              >
                ← {previous.title}
              </Styled.a>
            )}
          </li>
          <li>
            {next && (
              <Styled.a
                as={Link}
                to={rootPath.concat(next.slug.current.replace(/\/*$/, `/`))}
                rel="next"
              >
                {next.title} →
              </Styled.a>
            )}
          </li>
        </Flex>
      )}
    </div>
  )
}

export default PostFooter
