/** @jsx jsx */
import { jsx, Styled, Grid, Box } from "theme-ui"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useSanityConfig } from "gatsby-theme-catalyst-sanity"

const PostFooter = ({ previous, next }) => {
  const { sanityPostPath } = useSanityConfig()
  const rootPath = sanityPostPath.replace(/\/*$/, `/`) //Ensure trailing slash
  return (
    <div sx={{ mb: 3 }}>
      <Styled.hr sx={{ bg: "textGray" }} />
      {(previous || next) && (
        <Grid
          columns={[ 2 ]}
        >
          <Box>
            {previous && (
              <Styled.a
                as={Link}
                to={rootPath.concat(previous.slug.current.replace(/\/*$/, `/`))}
                rel="prev"
              >
                <Img
                  fluid={previous.featuredImage.asset.fluid}
                  sx={{
                    height: "125px",
                    borderRadius: "5px",
                  }}
                />
                ← {previous.title}
              </Styled.a>
            )}
          </Box>
          <Box>
            {next && (
              <Styled.a
                as={Link}
                to={rootPath.concat(next.slug.current.replace(/\/*$/, `/`))}
                rel="next"
              >
                <Img
                  fluid={next.featuredImage.asset.fluid}
                  sx={{
                    height: "125px",
                    borderRadius: "5px",
                  }}
                />
                {next.title} →
              </Styled.a>
            )}
          </Box>
        </Grid>
      )}
    </div>
  )
}

export default PostFooter
