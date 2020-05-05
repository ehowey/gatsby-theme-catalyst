/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostListImage = ({ link, image, altText }) => {
  return (
    <Link to={link}>
      <Img
        sx={{
          overflow: "hidden",
          maxHeight: "100%",
          maxWidth: "100%",
          height: "100%",
          width: "100%",
          variant: "variants.postListImage",
        }}
        fluid={image}
        alt={altText}
      />
    </Link>
  )
}

export default PostListImage
