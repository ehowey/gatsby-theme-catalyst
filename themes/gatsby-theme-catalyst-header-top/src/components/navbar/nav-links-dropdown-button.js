/** @jsx jsx */
import { jsx, Button } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { MdExpandMore, MdExpandLess } from "react-icons/md"

const NavLinkDropDown = ({
  link,
  children,
  activeDropdown,
  setActiveDropdown,
}) => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext) // eslint-disable-line

  const isActive = activeDropdown === link

  const handleClick = () => {
    if (isActive) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(link)
    }
  }

  return (
    <Button
      variant="dropdown"
      onClick={handleClick}
      aria-haspopup="true"
      sx={{
        backgroundColor: "transparent",
        textDecoration: isActive ? "underline" : "none",
        textDecorationThickness: "0.125em",
        color: isActive ? "primary" : "header.text",
        variant: "variants.navLinksDropdown",
      }}
    >
      {children}
      {isActive ? (
        <MdExpandLess sx={{ mb: -1 }} />
      ) : (
        <MdExpandMore sx={{ mb: -1 }} />
      )}
    </Button>
  )
}

export default NavLinkDropDown
