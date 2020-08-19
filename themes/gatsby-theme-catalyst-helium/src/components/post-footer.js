/** @jsx jsx */
import { jsx, Styled, Grid, Box } from "theme-ui"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostFooter = ({ previous, next }) => (
  <div>
    <Styled.hr sx={{ bg: "textGray" }} />
    {(previous || next) && (
      <Grid
        columns={[ 2 ]}
      >
        <Box>
          {previous && (
            <Styled.a as={Link} to={previous.slug} rel="prev">
                <Img
                  fluid={previous.featuredImage.childImageSharp.fluid}
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
            <Styled.a as={Link} to={next.slug} rel="next">
                <Img
                  fluid={next.featuredImage.childImageSharp.fluid}
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

export default PostFooter
