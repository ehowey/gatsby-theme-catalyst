// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import {
  jsx,
  Styled,
  useThemeUI,
  useColorMode as useThemeUIColorMode,
} from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {
  SocialHeader,
  ColorModeButton,
  useCatalystConfig,
  useSiteMetadata,
} from "gatsby-theme-catalyst-core"
import { IconContext } from "react-icons"
import { lightness } from "@theme-ui/color"

const SiteHeader = () => {
  const { theme } = useThemeUI()
  const [mode] = useThemeUIColorMode()
  const isDark = mode === "dark"
  const { useColorMode } = useCatalystConfig()
  const { menuLinks } = useSiteMetadata()
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
          position: ["static", null, null, "sticky", null],
          top: "0",
          width: "100%",
          maxWidth: ["maxContentWidth", null, null, "400px", "480px"],
          ml: [0, null, null, "auto", null],
          px: 3,
          pt: 3,
        }}
      >
        <div
          sx={{
            display: ["flex", null, null, "block", null],
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            sx={{
              alignSelf: "center",
            }}
          >
            <Styled.a as={Link} to="/" aria-label="Home">
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
          </div>
          <div sx={{ ml: [3, null, null, 0, null] }}>
            <div
              sx={{
                alignSelf: ["center", null, null, null, null],
              }}
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
            <div
              sx={{
                display: ["none", "block", null, null, null],
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
            </div>{" "}
          </div>
        </div>
        <nav
          sx={{
            mt: [4, null, null, null, null],
            display: "flex",
            gridColumn: "1 / -1",
            gridRow: "4 / 5",
            placeContent: ["center", "start", null, null, null],
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
                  mr: 3,
                  mb: 3,
                  a: {
                    py: 1,
                    px: 2,
                    borderColor: "primary",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderRadius: "4px",
                    color: "text",
                    textDecoration: "none",
                    letterSpacing: "1px",
                    zIndex: 2,
                    transition: "all 0.3s ease",
                    ":hover, :focus, :active": {
                      bg: "primary",
                      color: isDark
                        ? lightness("text", 0)
                        : lightness("text", 1),
                    },
                    variant: "variants.navLink",
                  },
                  ":last-of-type": {
                    mr: 0,
                  },
                  ".active": {
                    bg: "primary",
                    color: isDark ? lightness("text", 0) : lightness("text", 1),
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
