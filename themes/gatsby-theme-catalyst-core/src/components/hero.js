//Delete this or modify it to make you own hero compoment.  You can also just remove it enitrely by setting useHero to false in the theme options contained in gatsby-config.js file.
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useContext } from "react"
import { HomeContext } from "gatsby-theme-catalyst-core"
import { Button } from "@theme-ui/components"

const HeaderHero = () => {
  const [isHome] = useContext(HomeContext)
  if (isHome) {
    return (
      <div
        sx={{
          bg: "accent",
          px: 3,
        }}
        role="complementary"
        aria-label="Hero Section"
      >
        <div
          sx={{
            maxWidth: "maxContentWidth",
            mx: "auto",
            my: 5,
          }}
        >
          <Styled.h1 as="p" sx={{ mb: 4 }}>
            Gatsby Theme Catalyst
          </Styled.h1>
          <Button as="a" href="https://github.com/ehowey/gatsby-theme-catalyst">
            Documentation
          </Button>
          <Styled.p
            sx={{
              color: "text",
              fontSize: 1,
              mt: 4,
              opacity: "0.8",
            }}
          >
            Hero area toggled via "useHero" setting in{" "}
            <Styled.code>gatsby-theme-catalyst-core</Styled.code>.<br />
            Edit this in{" "}
            <Styled.code>
              src/gatsby-theme-catalyst-core/components/hero.js
            </Styled.code>
            .
          </Styled.p>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default HeaderHero
