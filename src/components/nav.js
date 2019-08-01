/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import NavLinks from "./navLinks"
import SocialLinks from "./socialLinks"
import SocialHeaderIcons from "./socialHeaderIcons"

const siteNav = props => {
  const { theme } = useThemeUI()
  const headOpen = () => {
    if (typeof window !== "undefined") {
      return window.innerHeight - parseInt(theme.sizes.headerHeight) + "px"
    } else {
      return null
    }
  } //Used to calculate the height of the nav so it is exactly the height of the window
  return (
    <nav
      sx={{
        gridColumn: ["1 / -1", "1 / -1", "2 / 3"],
        gridRow: ["2 / 3", "2 / 3", "1 / 2"],
        justifySelf: ["center", "start", "end"],
        alignItems: "center",
        justifyContent: ["flex-start", "space-between", "flex-start"],
        height: [props.open ? headOpen() : 0, "headerHeightTablet", "auto"],
        mt: [props.open ? 2 : 0, 0, null],
        display: "flex",
        flexDirection: ["column", "row", null],
        width: ["auto", "100%", "auto"],
      }}
      role="navigation"
      aria-label="main-navigation"
    >
      <NavLinks {...props} />
      <SocialLinks {...props}>
        <SocialHeaderIcons />
      </SocialLinks>
    </nav>
  )
}

export default siteNav
