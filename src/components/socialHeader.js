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
  FaBehance,
  FaBitbucket,
  FaDribbble,
  Fa500Px,
  FaEtsy,
  FaFlickr,
  FaGitlab,
  FaLastfm,
  FaMediumM,
  FaPatreon,
  FaPaypal,
  FaPinterestP,
  FaRedditAlien,
  FaSlack,
  FaSnapchatGhost,
  FaSoundcloud,
  FaSpotify,
  FaTumblr,
  FaWeibo,
  FaVimeoV,
  FaYelp,
  FaQq,
  FaWhatsapp,
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
            location
          }
        }
      }
    }
  `)
  const { theme } = useThemeUI()
  return (
    <IconContext.Provider value={{ size: theme.sizes.iconsheader }}>
      {data.site.siteMetadata.socialLinks.map(platform => {
        let socialName = platform.name.toLowerCase()
        let socialLocation = platform.location.toLowerCase()
        if (
          socialName === "twitter" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
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
        } else if (
          (socialName === "email" || socialName === "e-mail") &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          let email = "mailto:" + platform.url
          return (
            <a href={email} rel="noopener noreferrer" key={platform.name}>
              <FaRegEnvelope />
            </a>
          )
        } else if (
          socialName === "500px" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <Fa500Px />
            </a>
          )
        } else if (
          socialName === "behance" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaBehance />
            </a>
          )
        } else if (
          socialName === "bitbucket" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaBitbucket />
            </a>
          )
        } else if (
          socialName === "dribble" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaDribbble />
            </a>
          )
        } else if (
          socialName === "etsy" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaEtsy />
            </a>
          )
        } else if (
          socialName === "flickr" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaFlickr />
            </a>
          )
        } else if (
          socialName === "facebook" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
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
        } else if (
          socialName === "github" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
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
        } else if (
          socialName === "gitlab" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaGitlab />
            </a>
          )
        } else if (
          socialName === "instagram" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
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
        } else if (
          socialName === "lastfm" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaLastfm />
            </a>
          )
        } else if (
          socialName === "linkedin" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
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
        } else if (
          socialName === "medium" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaMediumM />
            </a>
          )
        } else if (
          socialName === "patreon" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaPatreon />
            </a>
          )
        } else if (
          socialName === "paypal" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaPaypal />
            </a>
          )
        } else if (
          socialName === "pinterest" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaPinterestP />
            </a>
          )
        } else if (
          socialName === "reddit" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaRedditAlien />
            </a>
          )
        } else if (
          socialName === "slack" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaSlack />
            </a>
          )
        } else if (
          socialName === "snapchat" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaSnapchatGhost />
            </a>
          )
        } else if (
          socialName === "soundcloud" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaSoundcloud />
            </a>
          )
        } else if (
          socialName === "spotify" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaSpotify />
            </a>
          )
        } else if (
          socialName === "tumblr" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaTumblr />
            </a>
          )
        } else if (
          socialName === "weibo" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaWeibo />
            </a>
          )
        } else if (
          socialName === "vimeo" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaVimeoV />
            </a>
          )
        } else if (
          socialName === "yelp" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaYelp />
            </a>
          )
        } else if (
          socialName === "youtube" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
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
        } else if (
          socialName === "qq" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaQq />
            </a>
          )
        } else if (
          socialName === "whatsapp" &&
          (socialLocation === "header" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaWhatsapp />
            </a>
          )
        } else if (socialLocation === "header" || socialLocation === "all") {
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
        } else {
          return null
        }
      })}
    </IconContext.Provider>
  )
}

export default siteSocial
