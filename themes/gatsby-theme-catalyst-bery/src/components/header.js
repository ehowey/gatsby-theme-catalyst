// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {
  SocialHeader,
  ColorModeButton,
  useCatalystConfig,
} from "gatsby-theme-catalyst-core"
import { IconContext } from "react-icons"
import Nav from "./nav"

const SiteHeader = () => {
  const { theme } = useThemeUI()
  const { useColorMode } = useCatalystConfig()
  const data = useStaticQuery(graphql`
    {
      sanitySiteHeader {
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

  const author = data.sanitySiteHeader
  return (
    <header
      sx={{
        gridArea: "header",
        display: "grid",
        width: "100%",
        alignItems: ["center", null, null, "start", null],
        justifyItems: "center",
        variant: "variants.header",
      }}
      id="header"
    >
      <div
        sx={{
          display: ["grid", null, null, "block", null],
          gridTemplateColumns: "auto minmax(0, 1fr)",
          gridTemplateRows: "auto",
          columnGap: 3,
          position: ["static", null, null, "sticky", null],
          top: "0",
          width: "100%",
          maxWidth: ["maxContentWidth", null, null, "400px", "480px"],
          ml: [0, null, null, "auto", null],
          px: 3,
          pt: 3,
        }}
      >
        <Styled.a
          as={Link}
          to="/"
          aria-label="Home"
          sx={{
            gridColumn: "1 / 2",
            gridRow: ["1 / 2", "1 / 3", null, null, null],
            justifySelf: "start",
            alignSelf: "center",
          }}
        >
          <Img
            sx={{
              height: ["70px", "120px", "150px", "200px", null],
              width: ["70px", "120px", "150px", "200px", null],
              borderRadius: "9999em",
              boxShadow: "lg",
            }}
            fluid={author.image.asset.fluid}
            alt={author.name}
          />
        </Styled.a>
        <div
          sx={{ gridColumn: "2 / 3", gridRow: "1 / 2", alignSelf: "center" }}
        >
          <Styled.a
            sx={{
              color: "text",
              textDecoration: "none",
              ":hover": { color: "text" },
            }}
            as={Link}
            to="/"
            aria-label="Home"
          >
            <Styled.h2
              sx={{
                m: 0,
                mt: [null, null, null, 4, null],
                fontSize: [3, 3, 4, null, null],
              }}
            >
              {author.name}
            </Styled.h2>
          </Styled.a>
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
        <Styled.p
          sx={{
            gridColumn: ["1 / -1", "2 / 3", null, null, null],
            gridRow: ["2 / 3", "2 / 3", null, null, null],
            m: 0,
            mt: 2,
            fontSize: 1,
            lineHeight: "snug",
          }}
        >
          {author.bio}
        </Styled.p>
        <Nav />
      </div>
    </header>
  )
}

export default SiteHeader
