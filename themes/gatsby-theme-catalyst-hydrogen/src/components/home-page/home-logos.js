/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import { useSanityConfig } from "gatsby-theme-catalyst-sanity"

const FeaturedLogos = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityHomePage(limit: 1, sort: { fields: _updatedAt, order: DESC }) {
        nodes {
          logoTitle
        }
      }
      allSanityLogos(filter: { featured: { eq: true } }) {
        nodes {
          altText
          id
          link
          logo {
            asset {
              id
            }
          }
        }
      }
    }
  `)
  const { sanityConfig } = useSanityConfig()
  const logos = data.allSanityLogos.nodes
  const result = data.allSanityHomePage.nodes[0]

  return (
    <Fragment>
      <Themed.h2>{result.logoTitle}</Themed.h2>
      <div
        sx={{
          mt: 4,
          mb: 5,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
          alignItems: "center",
          justifyItems: "center",
          gridGap: ["1rem", null, "2rem", null, null],
        }}
      >
        {logos.map((logo) => {
          const logoImage = getGatsbyImageData(
            logo.logo.asset.id,
            { maxWidth: 200 },
            sanityConfig
          )
          return (
            <a
              key={logo.id}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GatsbyImage
                image={logoImage}
                sx={{
                  transition: "all 0.3s ease 0s",
                  ":hover": {
                    boxShadow: "0 2px 15px rgba(0,0,0,.1)",
                    transform: "translateY(-3px)",
                  },
                }}
                alt={logo.altText}
              />
            </a>
          )
        })}
      </div>
    </Fragment>
  )
}

export default FeaturedLogos
