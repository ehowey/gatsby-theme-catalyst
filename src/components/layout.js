import React, { Component } from "react"
import { css, Global } from "@emotion/core"
import { Layout } from "theme-ui"
import Header from "./header"
import Main from "./main"
import Container from "./container"
import Footer from "./footer"

class SiteLayout extends Component {
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

  //This function is necessary for the onepage theme to ensure the menu closes without a page change.
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

            *,
            *:before,
            *:after {
              box-sizing: inherit;
            }

            body {
              margin: 0;
              padding: 0;
            }
          `}
        />
        <Header
          open={this.state.mobileMenuOpen}
          toggle={e => {
            this.toggleMobileMenu(e)
          }}
          close={e => {
            this.closeMobileMenu(e)
          }}
        />
        <Main>
          <Container>{this.props.children}</Container>
        </Main>
        <Footer />
      </Layout>
    )
  }
}

export default SiteLayout
