/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

const PostImage = ({ image, altText }) => {
  return (
    <Img
      sx={{
        my: 4,
        maxHeight: "400px",
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        variant: "variants.postImage",
      }}
      fluid={image}
      alt={altText}
    />
  )
}

export default PostImage
