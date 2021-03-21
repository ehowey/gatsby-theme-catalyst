/**@jsx jsx */
import { jsx } from "theme-ui"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"
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
  FaCodepen,
  FaDiscord,
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
  FaStackOverflow,
  FaTumblr,
  FaWeibo,
  FaVimeoV,
  FaYelp,
  FaQq,
  FaWhatsapp,
} from "react-icons/fa"

export const SocialHeader = () => {
  const { socialLinks } = useSiteMetadata()

  return socialLinks.map((platform) => {
    let socialName = platform.name.toLowerCase()
    let socialLocation = platform.location.toLowerCase()
    if (
      socialName === "twitter" &&
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      let email = "mailto:" + platform.link
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
          aria-label={platform.name}
          target="_blank"
          rel="noopener noreferrer"
          key={platform.name}
        >
          <FaBitbucket />
        </a>
      )
    } else if (
      socialName === "codepen" &&
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
          aria-label={platform.name}
          target="_blank"
          rel="noopener noreferrer"
          key={platform.name}
        >
          <FaCodepen />
        </a>
      )
    } else if (
      socialName === "discord" &&
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
          aria-label={platform.name}
          target="_blank"
          rel="noopener noreferrer"
          key={platform.name}
        >
          <FaDiscord />
        </a>
      )
    } else if (
      socialName === "dribble" &&
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
          aria-label={platform.name}
          target="_blank"
          rel="noopener noreferrer"
          key={platform.name}
        >
          <FaSpotify />
        </a>
      )
    } else if (
      (socialName === "stackoverflow" || socialName === "stack overflow") &&
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
          aria-label={platform.name}
          target="_blank"
          rel="noopener noreferrer"
          key={platform.name}
        >
          <FaStackOverflow />
        </a>
      )
    } else if (
      socialName === "tumblr" &&
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      (socialLocation === "header" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
          aria-label={platform.name}
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
          href={platform.link}
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
  })
}

export const SocialFooter = () => {
  const { socialLinks } = useSiteMetadata()

  return socialLinks.map((platform) => {
    let socialName = platform.name.toLowerCase()
    let socialLocation = platform.location.toLowerCase()
    if (
      socialName === "twitter" &&
      (socialLocation === "footer" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
      let email = "mailto:" + platform.link
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
          aria-label={platform.name}
          target="_blank"
          rel="noopener noreferrer"
          key={platform.name}
        >
          <FaBitbucket />
        </a>
      )
    } else if (
      socialName === "codepen" &&
      (socialLocation === "footer" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
          aria-label={platform.name}
          target="_blank"
          rel="noopener noreferrer"
          key={platform.name}
        >
          <FaCodepen />
        </a>
      )
    } else if (
      socialName === "discord" &&
      (socialLocation === "footer" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
          aria-label={platform.name}
          target="_blank"
          rel="noopener noreferrer"
          key={platform.name}
        >
          <FaDiscord />
        </a>
      )
    } else if (
      socialName === "dribble" &&
      (socialLocation === "footer" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
          aria-label={platform.name}
          target="_blank"
          rel="noopener noreferrer"
          key={platform.name}
        >
          <FaSpotify />
        </a>
      )
    } else if (
      (socialName === "stackoverflow" || socialName === "stack overflow") &&
      (socialLocation === "footer" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
          aria-label={platform.name}
          target="_blank"
          rel="noopener noreferrer"
          key={platform.name}
        >
          <FaStackOverflow />
        </a>
      )
    } else if (
      socialName === "tumblr" &&
      (socialLocation === "footer" || socialLocation === "all")
    ) {
      return (
        <a
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
          href={platform.link}
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
  })
}
