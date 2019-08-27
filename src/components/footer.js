/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import SocialFooterIcons from "./social/socialFooterIcons"

const siteFooter = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          socialLinks {
            name
            url
          }
        }
      }
    }
  `)
  return (
    <footer
      sx={{
        color: "footer.text",
        backgroundColor: "footer.background",
        px: 3,
        py: 3,

        a: {
          color: "footer.links",
        },
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
        <SocialFooterIcons />
      </div>
      <p sx={{ m: 0 }}>
        © {new Date().getFullYear()} {data.site.siteMetadata.title}
      </p>
    </footer>
  )
}

export default siteFooter
