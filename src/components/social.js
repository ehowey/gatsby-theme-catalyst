/**@jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { FaTwitter, FaGithub, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa"

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
      return (
          <div
          sx={{
              "a": {
                  color: "white"
              }
          }}
          >
        {data.site.siteMetadata.socialLinks.map((platform) => {
            platform.name = platform.name.toLowerCase();
            if (platform.name === "twitter") {
                return (
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                )
            } else if (platform.name === "github") {
                return (
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                )
            } else if (platform.name === "facebook") {
                return (
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                )
            } else if (platform.name === "youtube") {
                return (
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
                )
            } else if (platform.name === "instagram") {
                return (
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                )
            } else if (platform.name === "linkedin") {
                return (
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn/>
                </a>
                )
            } else {
                return (
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    {platform.name}
                </a>
                )
            }
        })}
        </div>
      )
    }

    export default siteSocial