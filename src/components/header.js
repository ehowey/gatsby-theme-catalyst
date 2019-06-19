import React, { Component } from 'react';
import styled from 'styled-components';
import Img from "gatsby-image";
import { StaticQuery, graphql, Link } from "gatsby"


class siteHeader extends Component {

  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  render() {

    const { mobileMenuOpen } = this.state;

//Header Styles - Start - Sets dynamic grid to control layout for header area
const Header = styled.header`
display: grid;
grid-template-columns: auto 1fr;
z-index: 1000;
width: 100%;
padding: 1rem 0;
background-color: ${props => props.theme.color.primary};
`
//Header Styles - End

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

//Mobile Button Styles - Start - Hamburger Button, based on styles from Bulma.io
const MobileButton = styled.button`
grid-column: 2 / 3;
grid-row: 1 / 2;
align-self: center;
color: #4a4a4a;
cursor: pointer;
display: block;
height: 3.25rem;
position: relative;
width: 3.25rem;
margin-left: auto;
background-color: transparent;
border: none;

@media (min-width: ${props => props.theme.screen.tablet}) {
  display: none;
}

span {
    background-color: currentColor;
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    -webkit-transform-origin: center;
            transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, -webkit-transform;
    transition-property: background-color, opacity, transform;
    transition-property: background-color, opacity, transform, -webkit-transform;
    transition-timing-function: ease-out;
    width: 16px;
}

span:nth-child(1) {
    top: calc(50% - 6px);
}

span:nth-child(2) {
    top: calc(50% - 1px);
}

span:nth-child(3) {
    top: calc(50% + 4px);
}

${({ mobileMenuOpen }) =>
  mobileMenuOpen &&
  `
  span:nth-child(1) {
      -webkit-transform: translateY(5px) rotate(45deg);
      transform: translateY(5px) rotate(45deg);
  }

  span:nth-child(2) {
  opacity: 0;
  }

  span:nth-child(3) {
      -webkit-transform: translateY(-5px) rotate(-45deg);
      transform: translateY(-5px) rotate(-45deg);
  }
  `}

`;

//Mobile Button Styles - End

//Nav Styles - Start
const Nav = styled.nav`
grid-column: 1 / -1;
grid-row: 2 / 3;
justify-self: end;
align-self: center;

@media (min-width: ${props => props.theme.screen.tablet}) {
grid-column: 2 / 3;
grid-row: 1 / 2;
}
`;

const NavList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: none;

@media (min-width: ${props => props.theme.screen.tablet}) {
display: flex;
flex-direction: row;
}

${({ mobileMenuOpen }) =>
  mobileMenuOpen &&
  `
    margin-right: 1rem;
    display: flex;
    flex-direction: column;

    > ${NavListItem} {
      margin: 0;
      margin-top: 1rem;
    }
  `};
`;

const NavListItem = styled.li`
margin: 0 0.75em;
`;

const NavLink = styled(Link)`
color: ${props => props.theme.color.textBlack};
padding: 1rem 0.5rem;
text-decoration: none;

@media (min-width: ${props => props.theme.screen.tablet}) {
font-size: 90%;
}

@media (min-width: ${props => props.theme.screen.laptop}) {
font-size: 100%;
}
`
//Nav Styles - End

    return (
      <StaticQuery
        query={graphql`
        query {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
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
      <Header {...this.props}>
       <Branding mobileMenuOpen={mobileMenuOpen}>
          <Logo fixed={data.brandingLogo.childImageSharp.fixed} alt="Logo"/>
            <Title>
                <TitleLink to="/">
                  {data.site.siteMetadata.title}
                </TitleLink>
            </Title>
        </Branding>
        <MobileButton onClick={this.toggleMobileMenu} mobileMenuOpen={mobileMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
        </MobileButton>
        <Nav>
          <NavList mobileMenuOpen={mobileMenuOpen}>
            {data.site.siteMetadata.menuLinks.map(link => (
            <NavListItem key={link.name}>
              <NavLink to={link.link}>
                {link.name}
              </NavLink>
            </NavListItem>
            ))}
          </NavList>
      </Nav>
    </Header>
    )}
    />
    );
  }
}

export default siteHeader;
