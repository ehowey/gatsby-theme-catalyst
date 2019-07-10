import React, { Component } from "react"
import { css, Global } from "@emotion/core"
import { Layout, Main, Container } from "theme-ui"
import Header from "./header"
import Footer from "./footer"
import Branding from "./branding"
import Nav from "./nav"
import MobileButton from "./mobileButton"

class siteLayout extends Component {
  constructor(props) {
    super(props)

    // Bind the this context to the handler function
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    this.closeMobileMenu = this.closeMobileMenu.bind(this)

    // Set some state
    this.state = {
      mobileMenuOpen: false,
    }
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  render() {
    return (
      <Layout>
        <Global
          styles={css`
            html {
              box-sizing: border-box;
            }

            *, *:before, *:after {
              box-sizing: inherit;
            }

            body {
              margin: 0;
              padding: 0;
            }
          `}
        />
        <Header open={this.state.mobileMenuOpen}>
          <Branding open={this.state.mobileMenuOpen} />
          <MobileButton action={this.toggleMobileMenu} open={this.state.mobileMenuOpen} />
          <Nav action={this.closeMobileMenu} open={this.state.mobileMenuOpen} />
        </Header>
        <Main>
          <Container>{this.props.children}</Container>
        </Main>
        <Footer>
          <h2>Here is the footer</h2>
        </Footer>
      </Layout>
    )
  }
}

export default siteLayout
