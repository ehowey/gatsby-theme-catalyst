import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "./use-site-metadata"

const SEO = ({
  description: propDescription,
  lang,
  meta,
  keywords: propKeywords,
  title: propTitle,
  image: propImage,
  isBlogPost,
}) => {
  const {
    title,
    description,
    keywords,
    twitterUsername,
    seoImage,
  } = useSiteMetadata()
  const seoTitle = propTitle || title
  const seoDescription = propDescription || description
  const seoKeywords = propKeywords || keywords
  const seoImg = propImage || seoImage
  const seoImgSrc = `${seoImg.src}`

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
        { property: `og:image:width`, content: seoImage.width },
        { property: `og:image:height`, content: seoImage.height },

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
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  isBlogPost: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  isBlogPost: PropTypes.bool,
}

export default SEO
