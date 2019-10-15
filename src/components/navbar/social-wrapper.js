/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "../contexts/nav-context"
import { MobileContext } from "../contexts/mobile-context"

const SocialWrapper = props => {
  const [open] = useContext(NavContext)
  const [mobile] = useContext(MobileContext)

  return (
    <div
      sx={{
        display: "flex",
        mr: mobile ? "auto" : 2,
        ml: "auto",
        mt: mobile ? 2 : 0,

        a: {
          color: open ? "header.iconsOpen" : "header.icons",
          mr: 2,
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

export default SocialWrapper
