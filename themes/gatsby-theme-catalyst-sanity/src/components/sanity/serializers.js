/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Figure from "./figure"
import FigureWide from "./figure-wide"

const headerId = (id) => {
  return id
    .toString()
    .toLowerCase()
    .replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g, "")
    .replace(/\s+/g, "-")
}

const serializers = {
  types: {
    figure: Figure,
    figureWide: FigureWide,
    block(props) {
      switch (props.node.style) {
        case "h1":
          return (
            <Styled.h1 id={headerId(props.children)}>
              {props.children}
            </Styled.h1>
          )
        case "h2":
          return (
            <Styled.h2 id={headerId(props.children)}>
              {props.children}
            </Styled.h2>
          )
        case "h3":
          return (
            <Styled.h3 id={headerId(props.children)}>
              {props.children}
            </Styled.h3>
          )
        case "h4":
          return (
            <Styled.h4 id={headerId(props.children)}>
              {props.children}
            </Styled.h4>
          )
        case "h5":
          return (
            <Styled.h5 id={headerId(props.children)}>
              {props.children}
            </Styled.h5>
          )
        case "h6":
          return (
            <Styled.h6 id={headerId(props.children)}>
              {props.children}
            </Styled.h6>
          )
        case "blockquote":
          return <Styled.blockquote>{props.children}</Styled.blockquote>
        default:
          return <Styled.p>{props.children}</Styled.p>
      }
    },
  },
  marks: {
    code: ({ children }) => <Styled.inlineCode>{children}</Styled.inlineCode>,
    link: ({ children, mark }) =>
      mark.blank ? (
        <Styled.a href={mark.href} target="_blank" rel="noopener noreferer">
          {children}
        </Styled.a>
      ) : (
        <Styled.a href={mark.href}>{children}</Styled.a>
      ),
  },
}

export default serializers
