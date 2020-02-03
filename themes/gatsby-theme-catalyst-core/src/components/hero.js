//Delete this or modify it to make you own hero compoment.  You can also just remove it enitrely by setting useHero to false in the theme options contained in gatsby-config.js file.
/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import { useContext } from "react"
import { HomeContext } from "gatsby-theme-catalyst-core"

const HeaderHero = () => {
  const [isHome] = useContext(HomeContext)
  if (!isHome) {
    return null
  } else {
    return (
      <div
        sx={{
          bg: "accent",
          py: 5,
          px: 3,
          mb: 5,
        }}
        aria-label="Hero Section"
      >
        <div
          sx={{
            maxWidth: "maxContentWidth",
            height: "100%",
            mx: "auto",
          }}
        >
          <Styled.h1 as="p">Hero Section</Styled.h1>
          <Styled.p>
            Enabled with the <Styled.inlineCode>useHero</Styled.inlineCode>{" "}
            theme option in{" "}
            <Styled.inlineCode>gatsby-theme-catalyst-core</Styled.inlineCode>.
            Shadow this file in a starter to implement your own hero section.
          </Styled.p>
          <Button
            as="a"
            href="https://github.com/ehowey/gatsby-theme-catalyst"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </Button>
        </div>
      </div>
    )
  }
}

export default HeaderHero
