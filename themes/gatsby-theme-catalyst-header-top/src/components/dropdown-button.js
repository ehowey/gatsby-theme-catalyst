/** @jsx jsx */
import { jsx, Button } from "theme-ui"
import { MdExpandMore, MdExpandLess } from "react-icons/md"

const NavLinkDropDown = ({
  link,
  children,
  activeDropdown,
  setActiveDropdown,
}) => {
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
      aria-haspopup={true}
      aria-expanded={isActive ? true : false}
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
