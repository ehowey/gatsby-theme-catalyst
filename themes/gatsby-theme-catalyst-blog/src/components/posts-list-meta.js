/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const PostListMeta = props => {
  return (
    <Styled.p
      sx={{
        m: 0,
        p: 0,
        fontSize: 1,
        textTransform: "uppercase",
      }}
    >
      {props.author} &bull; {props.date}
    </Styled.p>
  )
}

export default PostListMeta
