/**@jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { IconContext } from "react-icons"
import {
  FaRegEnvelope,
  FaTwitter,
  FaGithub,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"

const siteSocial = () => {
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
  const { theme } = useThemeUI()
  return (
    <IconContext.Provider value={{ size: theme.sizes.icons }}>
      {data.site.siteMetadata.socialLinks.map(platform => {
        let socialName = platform.name.toLowerCase()
        if (socialName === "twitter") {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaTwitter />
            </a>
          )
        } else if (socialName === "email" || socialName === "e-mail") {
          let email = "mailto:" + platform.url
          return (
            <a href={email} rel="noopener noreferrer" key={platform.name}>
              <FaRegEnvelope />
            </a>
          )
        } else if (socialName === "github") {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaGithub />
            </a>
          )
        } else if (socialName === "facebook") {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaFacebookF />
            </a>
          )
        } else if (socialName === "youtube") {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaYoutube />
            </a>
          )
        } else if (socialName === "instagram") {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaInstagram />
            </a>
          )
        } else if (socialName === "linkedin") {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaLinkedinIn />
            </a>
          )
        } else {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              {platform.name}
            </a>
          )
        }
      })}
    </IconContext.Provider>
  )
}

export default siteSocial
