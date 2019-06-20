import React from 'react';
import styled from "styled-components";
import Img from "gatsby-image";
import { StaticQuery, graphql, Link } from "gatsby";

//Branding Styles - Start - Controls look of Logo and Site Title
const Branding = styled.div`
display: flex;
align-items: center;
margin-left: 1rem;
`

const Logo = styled(Img)`
margin-right: 0.5rem;
`

const Title = styled.h1`
margin: 0;
font-size: 1.75rem;
`

const TitleLink = styled(Link)`
color: #000000;
text-decoration: none;
`
//Branding Styles - End

const siteBranding = () => {

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
              fixed(height:60) {
                ...GatsbyImageSharpFixed_withWebp
                  }
            }
          }
        }
        `}
        render={data => (
            <Branding>
                <Logo fixed={data.brandingLogo.childImageSharp.fixed} alt="Logo"/>
                <Title>
                    <TitleLink to="/">
                    {data.site.siteMetadata.title}
                    </TitleLink>
                </Title>
            </Branding>
            )}
        />
    )
}

export default siteBranding