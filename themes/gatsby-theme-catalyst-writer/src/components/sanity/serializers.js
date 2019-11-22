/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Figure from "./figure"
import FigureWide from "./figure-wide"

const serializers = {
  types: {
    figure: Figure,
    figureWide: FigureWide,
    block(props) {
      switch (props.node.style) {
        case "h1":
          return <Styled.h1>{props.children}</Styled.h1>
        case "h2":
          return <Styled.h2>{props.children}</Styled.h2>
        case "blockquote":
          return <Styled.blockquote>{props.children}</Styled.blockquote>
        default:
          return <Styled.p>{props.children}</Styled.p>
      }
    },
  },
}

export default serializers
