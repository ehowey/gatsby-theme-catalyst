/** @jsx jsx */
import { jsx } from "theme-ui"

const Box = ({ variant = "standard", ...props }) => {
  return (
    <div
      sx={{
        bg: props.bgcolor || "blue",
        height: props.height || "200px",
        width: props.width || "200px",
        variant: `variants.box.${variant}`,
      }}
    >
      {props.children}
    </div>
  )
}

export default Box
