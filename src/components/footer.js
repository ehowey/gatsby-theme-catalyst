/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Social from "./social"


const siteFooter = () => {
  const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              author
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
          }}
        >
          <p>© {new Date().getFullYear()}, {data.site.siteMetadata.author}</p>
          <p><Social/></p>
        </footer>
    )
}

export default siteFooter