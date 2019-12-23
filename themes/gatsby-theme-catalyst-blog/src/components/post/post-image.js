/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

const PostImage = props => {
  return (
    <Img
      sx={{
        height: "200px",
        mb: 3,
        variant: "variants.postImage",
      }}
      fluid={props.image}
      alt={props.altText}
    />
  )
}

export default PostImage
