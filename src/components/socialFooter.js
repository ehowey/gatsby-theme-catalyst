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
    <IconContext.Provider value={{ size: theme.sizes.iconsFooter }}>
      {data.site.siteMetadata.socialLinks.map(platform => {
        let socialName = platform.name.toLowerCase()
        let socialLocation = platform.location.toLowerCase()
        if (
          socialName === "twitter" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaTwitter />
            </a>
          )
        } else if (
          (socialName === "email" || socialName === "e-mail") &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          let email = "mailto:" + platform.url
          return (
            <a
              href={email}
              aria-label="Email"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaRegEnvelope />
            </a>
          )
        } else if (
          socialName === "500px" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <Fa500Px />
            </a>
          )
        } else if (
          socialName === "behance" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaBehance />
            </a>
          )
        } else if (
          socialName === "bitbucket" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaBitbucket />
            </a>
          )
        } else if (
          socialName === "dribble" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaDribbble />
            </a>
          )
        } else if (
          socialName === "etsy" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaEtsy />
            </a>
          )
        } else if (
          socialName === "flickr" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaFlickr />
            </a>
          )
        } else if (
          socialName === "facebook" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaFacebookF />
            </a>
          )
        } else if (
          socialName === "github" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaGithub />
            </a>
          )
        } else if (
          socialName === "gitlab" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaGitlab />
            </a>
          )
        } else if (
          socialName === "instagram" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaInstagram />
            </a>
          )
        } else if (
          socialName === "lastfm" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaLastfm />
            </a>
          )
        } else if (
          socialName === "linkedin" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaLinkedinIn />
            </a>
          )
        } else if (
          socialName === "medium" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaMediumM />
            </a>
          )
        } else if (
          socialName === "patreon" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaPatreon />
            </a>
          )
        } else if (
          socialName === "paypal" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaPaypal />
            </a>
          )
        } else if (
          socialName === "pinterest" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaPinterestP />
            </a>
          )
        } else if (
          socialName === "reddit" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaRedditAlien />
            </a>
          )
        } else if (
          socialName === "slack" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaSlack />
            </a>
          )
        } else if (
          socialName === "snapchat" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaSnapchatGhost />
            </a>
          )
        } else if (
          socialName === "soundcloud" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaSoundcloud />
            </a>
          )
        } else if (
          socialName === "spotify" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaSpotify />
            </a>
          )
        } else if (
          socialName === "tumblr" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaTumblr />
            </a>
          )
        } else if (
          socialName === "weibo" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaWeibo />
            </a>
          )
        } else if (
          socialName === "vimeo" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaVimeoV />
            </a>
          )
        } else if (
          socialName === "yelp" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaYelp />
            </a>
          )
        } else if (
          socialName === "youtube" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaYoutube />
            </a>
          )
        } else if (
          socialName === "qq" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaQq />
            </a>
          )
        } else if (
          socialName === "whatsapp" &&
          (socialLocation === "footer" || socialLocation === "all")
        ) {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              key={platform.name}
            >
              <FaWhatsapp />
            </a>
          )
        } else if (socialLocation === "footer" || socialLocation === "all") {
          return (
            <a
              href={platform.url}
              aria-label={platform.name}
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
