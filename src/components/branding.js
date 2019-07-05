/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"

const siteBranding = (props) => {

    return (
        <StaticQuery
        query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
          brandingLogo: file(relativePath: { eq: "images/logo.png" }) {
            childImageSharp {
              fluid(maxHeight:100) {
                ...GatsbyImageSharpFluid_withWebp
                  }
            }
          }
        }
        `}
        render={data => (
            <div {...props} sx={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '1rem'
            }}>
                <Img fluid={data.brandingLogo.childImageSharp.fluid} alt="Logo" {...props} sx={{
                    marginRight: '0.5rem',
                    height: '40px',
                    width: '40px'
                }}/>
                <h1 sx={{
                    margin: '0',
                    fontSize: '2rem'
                }}>
                    <Link to="/" {...props} sx={{
                        color: '#000000',
                        textDecoration: 'none'
                    }}>
                    {data.site.siteMetadata.title}
                    </Link>
                </h1>
            </div>
            )}
        />
    )
}

export default siteBranding