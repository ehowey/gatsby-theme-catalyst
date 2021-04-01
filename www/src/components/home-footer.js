/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { useSiteMetadata, SocialFooter } from "gatsby-theme-catalyst-core"
import { IconContext } from "react-icons"
import { baseColors } from "@theme-ui/preset-tailwind"

const SiteFooter = () => {
  const { title } = useSiteMetadata()
  const { theme } = useThemeUI()

  return (
    <footer
      sx={{
        color: baseColors.gray[8],
        backgroundColor: "footer.background",
        textAlign: "right",
        px: 3,
        py: 3,
        gridArea: "footer",
        a: {
          color: "footer.links",
        },
        variant: "variants.footer",
      }}
    >
      <div
        sx={{
          display: "grid",
          alignContent: "center",
          justifyContent: "right",
          width: "100%",
          maxWidth: "maxPageWidth",
          mx: "auto",
          my: 0,
        }}
      >
        <div
          sx={{
            a: {
              color: baseColors.gray[8],
              mr: 3,
            },
            "a:last-of-type": {
              mr: 0,
            },
            "a:hover": {
              color: "primary",
            },
          }}
        >
          <IconContext.Provider value={{ size: theme.sizes.iconsFooter }}>
            <SocialFooter />
          </IconContext.Provider>
        </div>
        <p sx={{ m: 0 }}>
          © {new Date().getFullYear()} {title}
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
