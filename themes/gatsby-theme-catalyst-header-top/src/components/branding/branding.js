/** @jsx jsx */
import { jsx } from "theme-ui"
import Logo from "./branding-logo"
import Title from "./branding-title"

const SiteBranding = () => {
  const useShoppingCart = true
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        ml: 2,
        mr: 2,
        gridColumn: useShoppingCart
          ? ["2 / 3", null, "1 / 2", null, null]
          : "1 / 2",
        gridRow: "1 / 2",
        justifySelf: useShoppingCart
          ? ["center", null, "left", null, null]
          : "left",
        variant: "variants.branding",
      }}
    >
      <Logo />
      <Title />
    </div>
  )
}

export default SiteBranding
