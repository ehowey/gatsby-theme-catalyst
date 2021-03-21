// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import { jsx, Themed, useThemeUI } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { SocialHeader, ColorModeButton } from "gatsby-theme-catalyst-core"
import { SanityContent } from "gatsby-theme-catalyst-sanity"
import { IconContext } from "react-icons"
import { useBeryConfig } from "../utils/use-bery-config"
import Nav from "./nav"

const SiteHeader = () => {
  const { theme } = useThemeUI()
  const { useColorMode, useSocialLinks } = useBeryConfig()
  const data = useStaticQuery(graphql`
    {
      sanitySiteHeader {
        name
        _rawBio
        image {
          asset {
            gatsbyImageData
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
        <Themed.a
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
          <GatsbyImage
            image={author.image.asset.gatsbyImageData}
            sx={{
              height: ["70px", "120px", "150px", "200px", null],
              width: ["70px", "120px", "150px", "200px", null],
              borderRadius: "9999em",
              boxShadow: "lg",
            }}
            alt={author.name}
          />
        </Themed.a>
        <div
          sx={{ gridColumn: "2 / 3", gridRow: "1 / 2", alignSelf: "center" }}
        >
          <Themed.a
            sx={{
              color: "text",
              textDecoration: "none",
              ":hover": { color: "text" },
            }}
            as={Link}
            to="/"
            aria-label="Home"
          >
            <Themed.h2
              sx={{
                m: 0,
                mt: [null, null, null, 4, null],
                fontSize: [3, 3, 4, null, null],
              }}
            >
              {author.name}
            </Themed.h2>
          </Themed.a>
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
              {useSocialLinks && <SocialHeader />}
              {useColorMode && <ColorModeButton />}
            </IconContext.Provider>
          </div>
        </div>
        <div
          sx={{
            gridColumn: ["1 / -1", "2 / 3", null, null, null],
            gridRow: ["2 / 3", "2 / 3", null, null, null],
            fontSize: 1,
            lineHeight: "snug",
          }}
        >
          <SanityContent data={author._rawBio} />
        </div>
        <Nav />
      </div>
    </header>
  )
}

export default SiteHeader
