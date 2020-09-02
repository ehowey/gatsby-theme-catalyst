// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import { jsx, useColorMode as useThemeUIColorMode } from "theme-ui"
import { Link } from "gatsby"
import { useSiteMetadata, NavContext } from "gatsby-theme-catalyst-core"
import { lightness, alpha } from "@theme-ui/color"
import { useContext, Fragment } from "react"
import { motion } from "framer-motion"
import { useThemeUI } from "theme-ui"

const FloatingNav = () => {
  const [mode] = useThemeUIColorMode()
  const { theme } = useThemeUI()
  const isDark = mode === "dark"
  const { menuLinks } = useSiteMetadata()
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  return (
    <Fragment>
      <motion.div
        animate={{
          backgroundColor: theme.colors.background,
          opacity: 0.85,
        }}
        transition={{ duration: 0.3 }}
        sx={{
          zIndex: "80",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: 0,
        }}
      />
      <nav
        sx={{
          display: ["block", "none", null, null, null],
          position: "fixed",
          bottom: "32px",
          right: "32px",
          pb: "64px",
          borderRadius: "4px",
          zIndex: "90",
        }}
        aria-label="Primary menu"
      >
        <ul
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            flexWrap: "wrap",
          }}
        >
          {menuLinks.map((link) => (
            <li
              sx={{
                cursor: "pointer",
                mb: 3,
                a: {
                  py: 2,
                  px: 2,
                  color: "text",
                  bg: "primary",
                  borderRadius: "4px",
                  textDecoration: "none",
                  letterSpacing: "1px",
                  zIndex: 2,
                  transition: "all 0.3s ease",
                  ":hover, :focus, :active": {
                    color: isDark ? lightness("text", 0) : lightness("text", 1),
                  },
                },
                ":last-of-type": {
                  mb: 0,
                },
                ".active": {
                  // color: isDark ? lightness("text", 0) : lightness("text", 1),
                },
              }}
              key={link.name}
            >
              <Link
                to={link.link}
                activeClassName="active"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  )
}

export default FloatingNav
