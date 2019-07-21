/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const siteBranding = props => {
  const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
          brandingLogo: file(relativePath: { eq: "images/logo.png" }) {
            childImageSharp {
              fluid(maxHeight: 300) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `)
      return(
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "1rem",
          }}
        >
          <Img
            sx={{
              marginRight: "0.5rem",
              height: "100%",
              width: "100%",
              minHeight: "100%",
              minWidth: "100%"
            }}
            fluid={data.brandingLogo.childImageSharp.fluid}
            alt={data.site.siteMetadata.title}
            imgStyle={{ objectFit: 'contain' }}
          />
          <h1
            sx={{
              margin: "0",
              fontSize: [4, 5, 6],
              whiteSpace: "nowrap"
            }}
          >
            <Link
              to="/"
              {...props}
              sx={{
                color: props.open ? "header.textOpen" : "header.text",
                textDecoration: "none",
              }}
            >
              {data.site.siteMetadata.title}
            </Link>
          </h1>
        </div>
  )
            }

export default siteBranding
