// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import { jsx, useColorMode as useThemeUIColorMode } from "theme-ui"
import { Link } from "gatsby"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { lightness } from "@theme-ui/color"

const Nav = () => {
  const [mode] = useThemeUIColorMode()
  const isDark = mode === "dark"
  const { menuLinks } = useSiteMetadata()
  return (
    <nav
      sx={{
        display: ["none", "block", null, null, null],
        gridColumn: "1 / -1",
        mt: 4,
        variant: "variants.nav",
      }}
      aria-label="Primary menu"
    >
      <ul
        sx={{
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
          m: 0,
          p: 0,

          variant: "variants.navUl",
        }}
      >
        {menuLinks.map((link) => (
          <li
            sx={{
              cursor: "pointer",
              mr: 3,
              mb: 3,
              a: {
                py: 1,
                px: 2,
                borderColor: "primary",
                borderWidth: "2px",
                borderStyle: "solid",
                borderRadius: "4px",
                color: "text",
                textDecoration: "none",
                letterSpacing: "1px",
                zIndex: 2,
                transition: "all 0.3s ease",
                ":hover, :focus, :active": {
                  bg: "primary",
                  color: isDark ? lightness("text", 0) : lightness("text", 1),
                },
                variant: "variants.navLink",
              },
              ":last-of-type": {
                mr: 0,
              },
              ".active": {
                bg: "primary",
                color: isDark ? lightness("text", 0) : lightness("text", 1),
                variant: "variants.navLinkActive",
              },
              variant: "variants.navLi",
            }}
            key={link.name}
          >
            <Link to={link.link} activeClassName="active">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
