/** @jsx jsx */
import { Component } from "react"
import { jsx } from "theme-ui"
import Branding from "./branding"
import Nav from "./nav"
import MobileButton from "./mobileButton"

class siteHeader extends Component {
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
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          position: theme => theme.headerPosition,
          color: this.state.mobileMenuOpen ? "header.textOpen" : "header.text",
          backgroundColor: this.state.mobileMenuOpen ? "header.backgroundOpen" : "header.background",
          padding: "0.5rem 0",
        }}
      >
        <Branding open={this.state.mobileMenuOpen} />
        <MobileButton
          action={this.toggleMobileMenu}
          open={this.state.mobileMenuOpen}
        />
        <Nav action={this.closeMobileMenu} open={this.state.mobileMenuOpen} />
      </div>
    )
  }
}

export default siteHeader
