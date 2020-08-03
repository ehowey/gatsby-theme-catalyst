// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {
  SocialHeader,
  ColorModeButton,
  useCatalystConfig,
  useSiteMetadata,
} from "gatsby-theme-catalyst-core"
import { IconContext } from "react-icons"

const SiteHeader = () => {
  const { theme } = useThemeUI()
  const { useColorMode } = useCatalystConfig()
  const { menuLinks } = useSiteMetadata()
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
          gridTemplateRows: "auto",
          gridColumnGap: 3,
        }}
      >
        <div
          sx={{
            gridColumn: "1 / 2",
            gridRow: ["1 / 2", "1 / 3", null, "1 / 2", null],
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
            mt: 3,
            display: "flex",
            gridColumn: ["1 / -1", null, "2 / -1", "1 / -1", null],
            gridRow: ["3 / 4", null, "3 / 4", "4 / 5", null],
            variant: "variant.nav",
          }}
          aria-label="Primary menu"
        >
          <ul
            sx={{
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
              m: 0,
              p: 0,
              variant: "variants.navUl",
            }}
          >
            {menuLinks.map((link) => (
              <li
                sx={{
                  cursor: "pointer",
                  mr: 2,
                  a: {
                    py: 2,
                    px: 1,
                    color: "primary",
                    textDecoration: "none",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    zIndex: 2,
                    ":hover, :focus, :active": {
                      textDecoration: "underline",
                      textDecorationThickness: "0.125em",
                      color: "primary",
                    },
                    ":first-of-type": {
                      pl: 0,
                    },
                    variant: "variants.navLink",
                  },
                  ":last-of-type": {
                    mr: 0,
                  },
                  ".active": {
                    textDecoration: "underline",
                    textDecorationThickness: "0.125em",
                    color: "primary",
                    variant: "variants.navLinkActive",
                  },
                  variant: "variants.navLi",
                }}
                key={link.name}
              >
                <Link to={link.link} activeClassName="active">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
