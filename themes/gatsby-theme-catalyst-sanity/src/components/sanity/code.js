/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import Highlight, { defaultProps } from "prism-react-renderer"

export default ({ node }) => {
  if (!node || !node.code) {
    return null
  }
  const { code, language } = node
  return (
    <Highlight {...defaultProps} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Themed.pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Themed.pre>
      )}
    </Highlight>
  )
}
