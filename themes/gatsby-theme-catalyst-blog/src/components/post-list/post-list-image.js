/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostListImage = props => {
  return (
    <Link to={props.link}>
      <Img
        sx={{
          height: "200px",
          mb: 3,
          variant: "variants.postListImage",
        }}
        fluid={props.image}
        alt={props.altText}
      />
    </Link>
  )
}

export default PostListImage
