// This is a placeholder for latent shadowing to better allow for the creation of a hero image/section in a child theme or starter.
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const HeaderHero = () => {
  return (
    <div
      sx={{
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        bg: "palegreen",
        p: 3,
      }}
      role="complementary"
      aria-label="Hero Section"
    >
      <Styled.h1 as="p">Hero Area</Styled.h1>
      <Styled.p>
        Hero area for some latent shadowing in sub-themes and sites.
        <br />
        Toggled via "useHero" setting.
      </Styled.p>
    </div>
  )
}

export default HeaderHero
