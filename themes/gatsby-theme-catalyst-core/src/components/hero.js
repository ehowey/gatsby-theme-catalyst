// This is a placeholder for latent shadowing to better allow for the creation of a hero image/section in a child theme or starter.
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
      <Styled.h1>Hero Area</Styled.h1>
      <Styled.p>
        Hero area for some latent shadowing in sub-themes and sites.
        <br />
        Toggled via "useHero" setting.
      </Styled.p>
    </section>
  )
}

export default HeaderHero
