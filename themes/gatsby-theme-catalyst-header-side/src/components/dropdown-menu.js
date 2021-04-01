/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { Link } from "gatsby"
import { NavContext } from "gatsby-theme-catalyst-core"

const DropdownMenu = ({ link }) => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext) // eslint-disable-line

  return (
    <ul
      sx={{
        m: 0,
        p: 0,
        pl: 1,
        listStyle: "none",
        variant: "variants.navUlSub",
      }}
      aria-label="Submenu"
    >
      {link.subMenu.map((subLink) => (
        <li
          key={subLink.name}
          sx={{
            lineHeight: "tight",
            mb: 2,
            ":last-child": {
              mb: 0,
            },
            a: {
              p: 0,
              fontSize: 1,
              color: isNavOpen ? "header.textOpen" : "header.text",
              ":hover, :focus, :active": {
                textDecoration: "underline",
                color: "primary",
              },
              variant: "variants.navLinkSub",
            },
            ".active": {
              textDecoration: "underline",
              color: "primary",
              variant: "variants.navLinkSubActive",
            },
            variant: "variants.navLiSub",
          }}
        >
          <Link
            to={subLink.link}
            activeClassName="active"
            onClick={() => setIsNavOpen(false)}
          >
            {subLink.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DropdownMenu
