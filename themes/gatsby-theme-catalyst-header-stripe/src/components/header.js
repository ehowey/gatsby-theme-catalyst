/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useEffect, useState } from "react"
import Branding from "./branding/branding"
import Nav from "./navbar/nav"
import NavIcons from "./navbar/nav-icons"
import MobileButton from "./navbar/nav-mobile-button"
import CartButton from "./ecommerce/cart-button"
import { NavContext } from "gatsby-theme-catalyst-core"

const SiteHeader = () => {
  const [isNavOpen] = useContext(NavContext)
  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      let scrollPos = 0
      window.addEventListener("scroll", () => {
        scrollPos = document.body.getBoundingClientRect().top
        const checkSmall = window.pageYOffset > 100
        const x = document.body.getBoundingClientRect().top > scrollPos
        console.log(scrollPos)
        setIsSmall(checkSmall)
      })
    }
  }, [])

  console.log(isSmall)

  return (
    <header
      sx={{
        position: ["sticky", null, "static", null, null],
        display: "grid",
        top: 0,
        width: "100%",
        color: isNavOpen ? "header.textOpen" : "header.text",
        backgroundColor: isNavOpen
          ? "header.backgroundOpen"
          : "header.background",
        gridArea: "header",
        zIndex: "888", // Ensure the header is always on top
        variant: "variants.header",
      }}
      id="header"
    >
      <div
        sx={{
          gridRow: "1 / -1",
          gridColumn: "1 / -1",
          alignSelf: "start",
          m: "0 auto",
          px: [1, null, 3, null, null],
          py: [1, null, 2, null, null],
          maxWidth: "maxPageWidth",
          width: "100%",
          display: "grid",
          gridTemplateColumns: ["50px 1fr 50px", null, "1fr", null, null],
          gridTemplateAreas: [
            `
          "mobileButton branding cartButton" 
          "nav nav nav"
          "icons icons icons"
          `,
            null,
            `
          "icons cartButton"
          "branding branding"
          "nav nav"
          `,
            null,
            null,
          ],
        }}
      >
        <NavIcons />
        <Branding />
        <Nav />
        <MobileButton />
        <CartButton />
      </div>
    </header>
  )
}

export default SiteHeader
