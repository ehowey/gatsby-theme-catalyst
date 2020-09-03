// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import { jsx, useColorMode as useThemeUIColorMode } from "theme-ui"
import { Link } from "gatsby"
import { useSiteMetadata, NavContext } from "gatsby-theme-catalyst-core"
import { lightness } from "@theme-ui/color"
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
          bottom: "24px",
          right: "24px",
          pb: "74px",
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
            <motion.li
              initial={{ y: "100%" }}
              animate={{
                y: 0,
              }}
              sx={{
                cursor: "pointer",
                mb: 3,
                a: {
                  py: 2,
                  px: 2,
                  color: isDark ? lightness("text", 0) : lightness("text", 1),
                  bg: "primary",
                  borderRadius: "4px",
                  textDecoration: "none",
                  letterSpacing: "1px",
                  fontSize: 3,
                  zIndex: 2,
                  transition: "all 0.3s ease",
                  ":hover, :focus, :active": {
                    backgroundColor: isDark
                      ? lightness("primary", 0.7)
                      : lightness("primary", 0.2),
                  },
                },
                ":last-of-type": {
                  mb: 0,
                },
                ".active": {
                  backgroundColor: isDark
                    ? lightness("primary", 0.7)
                    : lightness("primary", 0.2),
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
            </motion.li>
          ))}
        </ul>
      </nav>
    </Fragment>
  )
}

export default FloatingNav
