/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const PostListMeta = props => {
  return (
    <Styled.p
      sx={{
        color: "darkgrey",
        m: 0,
        p: 0,
        fontSize: 1,
        textTransform: "uppercase",
        letterSpacing: "wider",
      }}
    >
      {props.author} &bull; {props.date}
    </Styled.p>
  )
}

export default PostListMeta
