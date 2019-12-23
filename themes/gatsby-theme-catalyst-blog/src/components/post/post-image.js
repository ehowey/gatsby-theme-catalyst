/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

const PostImage = props => {
  return (
    <Img
      sx={{
        height: "200px",
        mb: 3,
      }}
      fluid={props.image}
    />
  )
}

export default PostImage
