/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

const PostImage = ({ image, altText }) => {
  return (
    <Img
      sx={{
        height: "200px",
        mb: 3,
        variant: "variants.postImage",
      }}
      fluid={image}
      alt={altText}
    />
  )
}

export default PostImage
