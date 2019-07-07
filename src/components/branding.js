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
            <div
            sx={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '1rem'
            }}>
                <Img fluid={data.brandingLogo.childImageSharp.fluid} alt="Logo"
                sx={{
                    marginRight: '0.5rem',
                    height: ['40px', '60px', null],
                    width: ['40px', '60px', null]
                }}/>
                <h1 sx={{
                    margin: '0',
                    fontSize: [6, 7, 8]
                }}>
                    <Link to="/"
                    {...props}
                    sx={{
                        color: props.open ? 'header.textOpen' : 'header.text',
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