/** @jsx jsx */
import { jsx } from "theme-ui"

const siteHeader = props => {
  return (
      <header
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          position: theme => theme.headerPosition,
          color: props.open ? "header.textOpen" : "header.text",
          backgroundColor: props.open ? "header.backgroundOpen" : "header.background",
          padding: "0.5rem 0",
        }}
      >
        { props.children }
      </header>
    )
  }

export default siteHeader
