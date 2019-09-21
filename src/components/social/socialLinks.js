/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "../navbar/navContext"

const SocialContainer = props => {
  const [open] = useContext(NavContext)
  return (
    <div
      sx={{
        display: [open ? "flex" : "none", "flex", null],
        mr: ["auto", 3, null],
        ml: "auto",
        mt: [3, 0, null],

        a: {
          color: open ? "header.iconsOpen" : "header.icons",
          mr: [3, 2, null],
          height: theme => theme.sizes.iconsHeader,
          textDecoration: "none",
        },
        "a:last-of-type": {
          mr: 0,
        },
        "a:hover": {
          color: "header.iconsHover",
        },
      }}
    >
      {props.children}
    </div>
  )
}

export default SocialContainer
