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
height: 40px;
width: 40px;
@media (min-width: ${props => props.theme.screen.tablet}) {
height: 60px;
width: 60px;
}

${({ mobileMenuOpen }) =>
		mobileMenuOpen &&
		`
		filter: invert(1);
		`};
`

const Title = styled.h1`
margin: 0;
font-size: 1.25rem;
@media (min-width: ${props => props.theme.screen.tablet}) {
  font-size: 1.5rem;
}
@media (min-width: ${props => props.theme.screen.laptop}) {
  font-size: 1.75rem;
}
`

const TitleLink = styled(Link)`
color: #000000;
text-decoration: none;

    ${({ mobileMenuOpen }) =>
		mobileMenuOpen &&
		`
		color: white;
		`};
`
//Branding Styles - End

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
            <Branding>
                <Logo fluid={data.brandingLogo.childImageSharp.fluid} alt="Logo" mobileMenuOpen={props.open}/>
                <Title>
                    <TitleLink to="/" mobileMenuOpen={props.open}>
                    {data.site.siteMetadata.title}
                    </TitleLink>
                </Title>
            </Branding>
            )}
        />
    )
}

export default siteBranding