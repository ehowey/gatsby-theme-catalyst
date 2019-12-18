/** @jsx jsx */
import { jsx } from "theme-ui"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { SocialFooter } from "gatsby-theme-catalyst-core"

const SiteFooter = () => {
  const { title } = useSiteMetadata()

  return (
    <footer
      sx={{
        color: "footer.text",
        backgroundColor: "footer.background",
        px: 3,
        py: 3,
        variant: "variants.footer",
        a: {
          color: "footer.links",
        },
      }}
    >
      <div
        sx={{
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
