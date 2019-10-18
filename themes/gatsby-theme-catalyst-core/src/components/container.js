/** @jsx jsx */
import { jsx } from "theme-ui"

const SiteContainer = props => {
  return (
    <div
      sx={{
        width: "100%",
        ml: "auto",
        mr: "auto",
      }}
    >
      {props.children}
    </div>
  )
}

export default SiteContainer
