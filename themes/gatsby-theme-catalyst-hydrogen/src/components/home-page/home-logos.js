/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
              fixed(width: 80, height: 80) {
                ...GatsbySanityImageFixed
              }
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
      <Styled.h2>{result.logoTitle}</Styled.h2>
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
        {logos.map(logo => (
          <a
            key={logo.id}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              sx={{
                transition: "all 0.3s ease 0s",
                ":hover": {
                  boxShadow: "0 2px 15px rgba(0,0,0,.1)",
                  transform: "translateY(-3px)",
                },
              }}
              fixed={logo.logo.asset.fixed}
              alt={logo.altText}
            />
          </a>
        ))}
      </div>
    </Fragment>
  )
}

export default FeaturedLogos
