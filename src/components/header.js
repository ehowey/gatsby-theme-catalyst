import React, { Component } from 'react';
import { StaticQuery, graphql } from "gatsby"
import {
  Header,
  Branding,
  Logo,
  Title,
  TitleLink,
  MobileButton,
  Nav,
  NavList,
  NavListItem,
  NavLink,
} from './header-style';

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
