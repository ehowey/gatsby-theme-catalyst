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
            ml: 2,
            mr: 2
          }}
        >
          <Link
            to="/"
          >
            <Img
              sx={{
                // Uses width because of weird bug with flex box and shrinking content we don't want shrunk
                width: [theme => theme.sizes.logoWidth, theme => theme.sizes.logoWidthTablet, theme => theme.sizes.logoWidthLaptop],
                mr: 1,
                filter: [props.open ? theme => theme.catalystOptions.invertLogo : "none", "none", null]
              }}
              fluid={data.brandingLogo.childImageSharp.fluid}
              alt={data.site.siteMetadata.title}
              imgStyle={{ objectFit: 'contain' }}
            />
          </Link>
          <h1
            sx={{
              fontSize: [4, 5, 6],
              flex: "0 0 auto"
            }}
          >
            <Link
              to="/"
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
