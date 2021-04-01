/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, Fragment, useState } from "react"
import { Link } from "gatsby"
import DropdownButton from "./dropdown-button"
import DropdownMenu from "./dropdown-menu"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavLinksDefault = () => {
  const { menuLinks } = useSiteMetadata()
  const [activeDropdown, setActiveDropdown] = useState([])
  const [isNavOpen, setIsNavOpen] = useContext(NavContext) // eslint-disable-line

  return (
    <ul
      sx={{
        display: "flex",
        alignItems: ["center", null, "start", null, null],
        flexDirection: "column",
        listStyle: "none",
        m: 0,
        p: 0,
        variant: "variants.navUl",
      }}
    >
      {menuLinks.map((link) => {
        const hasSubmenu = link.subMenu && link.subMenu.length > 0
        return (
          <li
            key={link.link}
            sx={{
              mb: 2,
              ":last-of-type": { mb: 0 },
              a: {
                color: isNavOpen ? "header.textOpen" : "header.text",
                textDecoration: "none",
                py: 1,
                px: 1,
                cursor: "pointer",
                position: "relative",
                fontWeight: "bold",
                letterSpacing: "1px",
                transition: "all 0.3s ease",
                ":hover, :focus, :active": {
                  textDecoration: "underline",
                  textDecorationThickness: "0.125em",
                  color: "primary",
                },
                variant: "variants.navLink",
              },
              ".active": {
                textDecoration: "underline",
                textDecorationThickness: "0.125em",
                color: "primary",
                variant: "variants.navLinkActive",
              },
              variant: "variants.navLi",
            }}
          >
            {!hasSubmenu && (
              <Link
                to={link.link}
                activeClassName="active"
                onClick={() => setIsNavOpen(false)}
              >
                {link.name}
              </Link>
            )}

            {hasSubmenu && (
              <Fragment>
                <DropdownButton
                  link={link.link}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                >
                  {link.name}
                </DropdownButton>
                {activeDropdown.includes(link.link) && (
                  <DropdownMenu link={link} />
                )}
              </Fragment>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinksDefault
