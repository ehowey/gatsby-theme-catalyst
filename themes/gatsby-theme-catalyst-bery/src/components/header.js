// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  SocialHeader,
  ColorModeButton,
  useCatalystConfig,
} from "gatsby-theme-catalyst-core"
import { IconContext } from "react-icons"
import NavLinks from "./nav/nav-links"

const SiteHeader = () => {
  const { theme } = useThemeUI()
  const { useColorMode } = useCatalystConfig()
  const data = useStaticQuery(graphql`
    {
      sanityAuthor {
        name
        bio
        image {
          asset {
            fluid(maxWidth: 1080) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)

  const author = data.sanityAuthor
  return (
    <header
      sx={{
        gridArea: "header",
        variant: "variants.header",
        display: "grid",
        width: "100%",
        alignItems: ["center", null, null, "start", null],
        justifyItems: "center",
      }}
      id="header"
    >
      <div
        sx={{
          maxWidth: ["maxContentWidth", null, null, "400px", null],
          ml: [0, null, null, "auto", null],
          px: 3,
          pt: 3,
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: ["1fr 1fr auto", null, null, "auto", null],
          gridColumnGap: 3,
        }}
      >
        <div
          sx={{
            gridColumn: "1 / 2",
            gridRow: ["1 / 2", "1 / -1", null, "1 / 2", null],
            alignSelf: "center",
          }}
        >
          <Img
            sx={{
              height: ["125px", "150px", "175px", "200px", null],
              width: ["125px", "150px", "175px", "200px", null],
              borderRadius: "9999em",
            }}
            fluid={author.image.asset.fluid}
            alt={author.name}
          />
        </div>
        <div
          sx={{
            gridColumn: ["2/ 3", null, null, "1 / 2", null],
            gridRow: ["1/ 2", null, null, "2 / 3", null],
            alignSelf: ["center", "end", null, null, null],
          }}
        >
          <Styled.h2
            sx={{
              m: 0,
              fontSize: [3, null, 4, null, null],
            }}
          >
            {author.name}
          </Styled.h2>
          <div
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 1,
              a: {
                color: "header.icons",
                mr: 2,
                textDecoration: "none",
                display: "grid",
                placeItems: "center",
              },
              "a:last-of-type": {
                mr: 0,
              },
              "a:hover": {
                color: "primary",
              },
              button: {
                color: "header.icons",
                ml: 2,
                ":hover": {
                  color: "primary",
                },
              },
            }}
          >
            <IconContext.Provider value={{ size: theme.sizes.iconsHeader }}>
              <SocialHeader />
              {useColorMode && <ColorModeButton />}
            </IconContext.Provider>
          </div>
        </div>
        <div
          sx={{
            gridColumn: ["1 / -1", "2 / 3", null, "1 / -1", null],
            gridRow: ["2 / 3", null, null, "3 /4", null],
          }}
        >
          <Styled.p
            sx={{
              m: 0,
              mt: 2,
              fontSize: 1,
            }}
          >
            {author.bio}
          </Styled.p>
        </div>
        <nav
          sx={{
            display: "flex",
            gridColumn: ["1 / -1", "2 / -1", null, "1 / -1", null],
            gridRow: ["3 / 4", "3 / 4", null, "4 / 5", null],
            mt: 2,
            variant: "variant.nav",
          }}
          aria-label="Primary menu"
        >
          <NavLinks />
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
