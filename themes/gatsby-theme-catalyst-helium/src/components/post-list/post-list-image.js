/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostListImage = ({ link, image, altText }) => {
  return (
    <Link to={link}>
      <Img
        sx={{
          height: "200px",
          mb: 3,
          variant: "variants.postListImage",
        }}
        fluid={image}
        alt={altText}
      />
    </Link>
  )
}

export default PostListImage
