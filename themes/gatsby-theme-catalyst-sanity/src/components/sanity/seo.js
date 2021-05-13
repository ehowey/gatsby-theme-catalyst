import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "./use-site-metadata"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"
import { useLocation } from "@reach/router"

const Seo = ({
  description: propDescription,
  lang,
  meta,
  location: propLocation,
  keywords: propKeywords,
  title: propTitle,
  image: propImage,
  isBlogPost,
}) => {
  // Get site metadata
  const {
    title,
    description,
    keywords,
    twitterUsername,
    seoImage,
    siteUrl,
  } = useSiteMetadata()
  // Title, description, keywords from site metadata or from prop
  const seoTitle = propTitle || title
  const seoDescription = propDescription || description
  const seoKeywords = propKeywords || keywords
  // Check image prop, only seek it if it exists
  const hasPropImage = propImage !== null && propImage !== undefined
  const seoImgSrc = hasPropImage ? propImage.asset.url : seoImage.src
  const seoImgWidth = hasPropImage
    ? propImage.asset.metadata.dimensions.width
    : seoImage.width
  const seoImgHeight = hasPropImage
    ? propImage.asset.metadata.dimensions.height
    : seoImage.height
  // Check location to create canonical links
  const location = useLocation()
  const seoCanononical = propLocation || location.pathname

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seoTitle}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: seoDescription,
        },
        {
          name: `image`,
          content: seoImgSrc,
        },

        //Open Graph
        {
          property: `og:title`,
          content: seoTitle,
        },
        {
          property: `og:description`,
          content: seoDescription,
        },
        {
          property: `og:type`,
          content: isBlogPost ? `article` : `website`,
        },
        {
          property: `og:image`,
          content: seoImgSrc,
        },
        {
          property: `og:image:alt`,
          content: seoTitle,
        },
        { property: `og:image:width`, content: seoImgWidth },
        { property: `og:image:height`, content: seoImgHeight },

        // Twitter
        {
          name: `twitter:title`,
          content: seoTitle,
        },
        {
          name: `twitter:description`,
          content: seoDescription,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername,
        },
        {
          name: `twitter:site`,
          content: twitterUsername,
        },
        {
          name: `twitter:image`,
          content: seoImgSrc,
        },
        {
          name: `twitter:image:alt`,
          content: seoTitle,
        },
      ]
        .concat(
          seoKeywords.length > 0
            ? {
                name: `keywords`,
                content: seoKeywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      <link rel="canonical" href={`${siteUrl}${seoCanononical}`} />
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  isBlogPost: false,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  isBlogPost: PropTypes.bool,
}

export default Seo
