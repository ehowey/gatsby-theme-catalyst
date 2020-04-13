/** @jsx jsx */
import { jsx } from "theme-ui"
import {
  useSiteMetadata,
  useCatalystConfig,
  SocialFooter,
} from "gatsby-theme-catalyst-core"
import { baseColors } from "@theme-ui/preset-tailwind"

const SiteFooter = () => {
  const { title } = useSiteMetadata()
  const { footerContentLocation } = useCatalystConfig()
  const isLeft = footerContentLocation === "left"
  const isRight = footerContentLocation === "right"
  const isCenter = footerContentLocation === "center"

  return (
    <footer
      sx={{
        color: baseColors.gray[8],
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
          <SocialFooter />
        </div>
        <p sx={{ m: 0 }}>
          © {new Date().getFullYear()} {title}
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
