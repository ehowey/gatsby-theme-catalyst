/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import Figure from "./figure"
import FigureWide from "./figure-wide"
import Code from "./code"

const headerId = (id) => {
  return id
    .toString()
    .toLowerCase()
    .replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g, "")
    .replace(/\s+/g, "-")
}

const serializers = {
  list: (props) => {
    const { type } = props
    const bullet = type === "bullet"
    if (bullet) {
      return <Themed.ul>{props.children}</Themed.ul>
    }
    return <Themed.ol>{props.children}</Themed.ol>
  },

  listItem: (props) => <Themed.li>{props.children}</Themed.li>,

  types: {
    code: Code,
    figure: Figure,
    figureWide: FigureWide,
    block(props) {
      switch (props.node.style) {
        case "h1":
          return (
            <Themed.h1 id={headerId(props.children)}>
              {props.children}
            </Themed.h1>
          )
        case "h2":
          return (
            <Themed.h2 id={headerId(props.children)}>
              {props.children}
            </Themed.h2>
          )
        case "h3":
          return (
            <Themed.h3 id={headerId(props.children)}>
              {props.children}
            </Themed.h3>
          )
        case "h4":
          return (
            <Themed.h4 id={headerId(props.children)}>
              {props.children}
            </Themed.h4>
          )
        case "h5":
          return (
            <Themed.h5 id={headerId(props.children)}>
              {props.children}
            </Themed.h5>
          )
        case "h6":
          return (
            <Themed.h6 id={headerId(props.children)}>
              {props.children}
            </Themed.h6>
          )
        case "small":
          return <Themed.p sx={{ fontSize: 1 }}>{props.children}</Themed.p>
        case "smallest":
          return <Themed.p sx={{ fontSize: 0 }}>{props.children}</Themed.p>
        case "blockquote":
          return <Themed.blockquote>{props.children}</Themed.blockquote>
        default:
          return <Themed.p>{props.children}</Themed.p>
      }
    },
  },
  marks: {
    sup: ({ children }) => <sup>{children}</sup>,
    code: ({ children }) => <Themed.inlineCode>{children}</Themed.inlineCode>,
    link: ({ children, mark }) =>
      mark.blank ? (
        <Themed.a href={mark.href} target="_blank" rel="noopener noreferer">
          {children}
        </Themed.a>
      ) : (
        <Themed.a href={mark.href}>{children}</Themed.a>
      ),
  },
}

export default serializers
