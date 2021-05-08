/** @jsx jsx */
import { jsx, useThemeUI, Themed } from "theme-ui"
import { useSiteMetadata, SocialFooter } from "gatsby-theme-catalyst-core"
import { IconContext } from "react-icons"
import { useFooterConfig } from "../utils/use-footer-config"

const SiteFooter = () => {
  const { title } = useSiteMetadata()
  const { footerContentLocation, useFooterSocialLinks } = useFooterConfig()
  const { theme } = useThemeUI()
  const isLeft = footerContentLocation === "left"
  const isRight = footerContentLocation === "right"
  const isCenter = footerContentLocation === "center"

  return (
    <footer
      sx={{
        color: "footer.text",
        backgroundColor: "footer.background",
        textAlign:
          (isLeft && "left") || (isRight && "right") || (isCenter && "center"),
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
          justifyContent:
            (isLeft && "start") || (isRight && "end") || (isCenter && "center"),
          width: "100%",
          maxWidth: "maxPageWidth",
          mx: "auto",
          my: 0,
        }}
      >
        <div
          sx={{
            a: {
              color: "footer.icons",
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
            {useFooterSocialLinks && <SocialFooter />}
          </IconContext.Provider>
        </div>
        <Themed.p sx={{ m: 0 }}>
          © {new Date().getFullYear()} {title}
        </Themed.p>
      </div>
    </footer>
  )
}

export default SiteFooter
