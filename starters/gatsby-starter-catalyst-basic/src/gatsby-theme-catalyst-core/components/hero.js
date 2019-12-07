/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const HeaderHero = () => {
  return (
    <section
      sx={{
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        bg: "palegreen",
        p: 5,
        textAlign: "center",
      }}
    >
      <Styled.h1>Cat-a-lyst = Gatsby + MDX + ThemeUI</Styled.h1>
      <Styled.p>
        Hero area toggled via "useHero" setting in `gatsby-theme-catalyst-core`.
        <br />
        Edit this in `src/gatsby-theme-catalyst-core/components/hero.js`.
      </Styled.p>
    </section>
  )
}

export default HeaderHero
