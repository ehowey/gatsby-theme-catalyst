/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

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
              gatsbyImageData(
                width: 200
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `)
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
        {logos.map((logo) => (
          <a
            key={logo.id}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GatsbyImage
              image={logo.logo.asset.gatsbyImageData}
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
        ))}
      </div>
    </Fragment>
  )
}

export default FeaturedLogos
